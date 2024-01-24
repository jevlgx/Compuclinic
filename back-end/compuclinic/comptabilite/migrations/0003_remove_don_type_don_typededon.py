# Generated by Django 5.0 on 2024-01-24 22:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comptabilite', '0002_rename_prix_chambreinternement_prixdulit_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='don',
            name='type',
        ),
        migrations.AddField(
            model_name='don',
            name='typeDeDon',
            field=models.CharField(choices=[('0', 'Espece'), ('1', 'materiel')], default=0, max_length=1, validators=[django.core.validators.RegexValidator('^[0-1]$', 'La catégorie doit être comprise entre 0 et 3.')]),
            preserve_default=False,
        ),
    ]