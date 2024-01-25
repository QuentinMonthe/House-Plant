from rest_framework import routers

from plant_manage.views import PlantViewSet, WateringViewSet


router = routers.DefaultRouter()
router.register('plant', PlantViewSet)
router.register('watering', WateringViewSet)
