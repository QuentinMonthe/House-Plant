from django.db import transaction
from django.shortcuts import render
from django.utils import timezone
from rest_framework import mixins, status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from plant_manage.models import Plant, Watering
from plant_manage.serializers import PlantDetailSerializer, PlantListSerializer, WateringSerializer

# Create your views here.


class CustomModelViewSet(mixins.UpdateModelMixin,
                         mixins.ListModelMixin, viewsets.GenericViewSet):
    """
    A viewset that provides default `create()`, `update()`,
    `partial_update()` and `list()` actions.
    """
    pass


class PlantViewSet(viewsets.ModelViewSet):

    queryset = Plant.objects.all()
    serializer_class = PlantDetailSerializer
    filterset_fields = ['user', 'species']
    permission_classes = (IsAuthenticated, )

    detail_serializer_class = PlantListSerializer

    def get_serializer_class(self):
        # Notre mixin détermine quel serializer à utiliser même si elle ne sait pas ce que c'est, ni comment l'utiliser
        if self.action == 'retrieve' and self.detail_serializer_class is not None:
            # Si l'action demandée est le détail alors nous retournons le serializer de détail
            return self.detail_serializer_class
        return super().get_serializer_class()

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # On attends d'abord que la nouvelle plante soit creer avec succes
        # On recurpere l'instance de plante cree
        data = Plant.objects.last()

        # On calcul la duree prevue pour l'arrosage de cette plante en second
        wait = serializer.data['watering_frequency']
        splitaddr = wait.split(' ')
        if len(splitaddr) == 2:
            day = splitaddr[0]
            hour = splitaddr[1]
        else:
            day = 0
            hour = wait

        h, m, s = hour.split(':')
        wait_second = int(day) * 86400 + int(h) * 3600 + int(m) * 60 + int(s)

        # On cree ensuite le premier rappel d'entretien de cette plante
        date_due = timezone.now() + timezone.timedelta(seconds=wait_second)

        # Creation du premier point d'arrosage
        Watering.objects.create(
            is_valid=False, date_planned=date_due, plant=data)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class WateringViewSet(CustomModelViewSet):

    queryset = Watering.objects.all()
    serializer_class = WateringSerializer
    permission_classes = (IsAuthenticated, )

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        # On recurpere l'instance de plante associe
        data = Plant.objects.get(code=serializer.data['plant'])

        # On definie la date prevue pour l'arrosage de cette plante
        date_due = timezone.now() + data.watering_frequency

        # Creation du premier point d'arrosage
        Watering.objects.create(
            is_valid=False, date_planned=date_due, plant=data)

        return Response(serializer.data)
