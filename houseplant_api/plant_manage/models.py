import uuid
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from rest_framework.authtoken.admin import User

# Create your models here.


class Plant(models.Model):

    code = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40)
    species = models.CharField(max_length=40)
    date_purchase = models.DateField(blank=True)
    image = models.ImageField(upload_to='images/', null=True)
    watering_frequency = models.DurationField()
    water_requirement = models.DecimalField(max_digits=5, decimal_places=3)
    user = models.ForeignKey(User, verbose_name=_("owner plant"),
                             on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("Plant")
        verbose_name_plural = _("Plants")

    # Un atribut permettant d'identifier directement le date du prochain entretien de la plantem sans besoinde consulter son detail
    @property
    def next_watering(self):
        queryset = Watering.objects.get(plant=self, is_valid=False)
        return queryset.date_planned


class Watering(models.Model):

    code = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    is_valid = models.BooleanField(default=False)
    date_planned = models.DateTimeField(blank=True)
    date_completion = models.DateTimeField(null=True, blank=True)
    plant = models.ForeignKey(
        "plant_manage.Plant", on_delete=models.CASCADE, related_name='watering_history')

    class Meta:
        verbose_name = _("Watering")
        verbose_name_plural = _("Waterings")

