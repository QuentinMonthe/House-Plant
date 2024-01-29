from django.db import transaction
from django.shortcuts import render
from django.utils import timezone
from rest_framework import status, viewsets
from rest_framework.authtoken.admin import User
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from plant_manage.models import Plant, Watering
from plant_manage.serializers import PlantDetailSerializer, PlantListSerializer, WateringDetailSerializer, WateringSerializer

# Create your views here.


class PlantViewSet(viewsets.ModelViewSet):

    queryset = Plant.objects.all()
    serializer_class = PlantListSerializer
    filterset_fields = ['user', 'species']
    permission_classes = (IsAuthenticated, )

    detail_serializer_class = PlantDetailSerializer

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

        # On crée la nouvelle plante
        # On la recupere ensuite pour l'associe a un arrosage
        data = serializer.save()

        # On calcul la duree prevue pour l'arrosage de cette plante en second
        wait = data.watering_frequency

        wait_second = wait.total_seconds()
        # On cree ensuite le premier rappel d'entretien de cette plante
        date_due = timezone.now() + timezone.timedelta(seconds=wait_second)

        # Creation du premier point d'arrosage
        Watering.objects.create(
            is_valid=False, date_planned=date_due, plant=data)

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = Plant.objects.filter(
            user=request.user).order_by('date_purchase')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class WateringViewSet(viewsets.ViewSet):

    queryset = Watering.objects.all()
    serializer_class = WateringSerializer
    permission_classes = (IsAuthenticated, )

    @transaction.atomic
    def list(self, request, *args, **kwargs):
        # Recuperation des informations de l'utisateur courant
        user = User.objects.get(username=request.user)

        # Liste des arrosages effectuee et prevue pour cet utilisateur
        queryset = Watering.objects.filter(
            plant__user__id=user.id).order_by('plant')

        # Serialisation et retour vers l'utilisateur
        serializer = WateringDetailSerializer(queryset, many=True)
        return Response(serializer.data)

    @transaction.atomic
    @action(detail=False, methods=['post'])
    def check_watering(self, request):
        # On recurpere l'instance de plante associe
        plant = Plant.objects.get(code=request.data['plant'])

        # On recurpere l'instance du prochain arrosage de cette plante
        queryset = Watering.objects.filter(is_valid=False, plant=plant).first()

        if not queryset:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        queryset.is_valid = True
        queryset.quantity_water = request.data['quantity_water']
        queryset.date_completion = timezone.now()
        queryset.save()

        # On definie ensuite la date prevue pour le prochain arrosage de cette plante
        date_due = queryset.date_completion + plant.watering_frequency

        # Creation du prochain point d'arrosage
        data = Watering.objects.create(
            is_valid=False, date_planned=date_due, plant=plant)

        serializer = WateringSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)
