from rest_framework import serializers

from plant_manage.models import Plant, Watering


class PlantDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Plant
        fields = ('code', 'name', 'species', 'date_purchase',
                  'image', 'watering_frequency', 'water_requirement', 'user', 'next_watering')


class WateringSerializer(serializers.ModelSerializer):

    class Meta:
        model = Watering
        fields = '__all__'


class PlantListSerializer(serializers.ModelSerializer):

    watering_history = WateringSerializer(many=True)

    class Meta:
        model = Plant
        fields = ('code', 'name', 'species', 'date_purchase',
                  'image', 'watering_frequency', 'water_requirement', 'watering_history')
