from rest_framework import serializers

from plant_manage.models import Plant, Watering


class PlantListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        fields = ('code', 'name', 'species', 'date_purchase',
                  'image', 'watering_frequency', 'water_requirement', 'user', 'next_watering')


class WateringSerializer(serializers.ModelSerializer):

    class Meta:
        model = Watering
        fields = '__all__'


class WateringDetailSerializer(serializers.ModelSerializer):

    plant = PlantListSerializer(many=False)

    class Meta:
        model = Watering
        fields = ('code', 'is_valid', 'date_planned',
                  'date_completion', 'plant')


class PlantDetailSerializer(serializers.ModelSerializer):

    watering_history = WateringSerializer(many=True)

    class Meta:
        model = Plant
        fields = ('code', 'name', 'species', 'date_purchase',
                  'image', 'watering_frequency', 'water_requirement', 'watering_history')
