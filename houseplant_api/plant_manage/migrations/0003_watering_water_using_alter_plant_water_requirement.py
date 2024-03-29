# Generated by Django 5.0.1 on 2024-01-28 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_manage', '0002_alter_plant_date_purchase_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='watering',
            name='water_using',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=4),
        ),
        migrations.AlterField(
            model_name='plant',
            name='water_requirement',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
    ]
