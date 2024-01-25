from django.contrib import admin

from plant_manage.models import Plant, Watering

# Register your models here.


@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    list_display = ('name', 'species', 'date_purchase',
                    'image', 'watering_frequency', 'water_requirement', 'user')
    list_filter = ('species', )
    search_fields = ('name', )


@admin.register(Watering)
class WateringAdmin(admin.ModelAdmin):
    list_display = ('is_valid', 'date_planned', 'date_completion', 'plant')
    list_filter = ('is_valid', )
    # search_fields = ('plant', )
