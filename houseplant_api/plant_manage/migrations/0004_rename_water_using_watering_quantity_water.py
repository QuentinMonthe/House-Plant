# Generated by Django 5.0.1 on 2024-01-28 22:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plant_manage', '0003_watering_water_using_alter_plant_water_requirement'),
    ]

    operations = [
        migrations.RenameField(
            model_name='watering',
            old_name='water_using',
            new_name='quantity_water',
        ),
    ]
