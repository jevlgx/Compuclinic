# Generated by Django 5.0 on 2024-01-25 13:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comptabilite', '0003_rename_categorieobjetmedical_categorieobjetmedicaux'),
    ]

    operations = [
        migrations.CreateModel(
            name='TypeExamen',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(default='none', max_length=200)),
            ],
        ),
        migrations.AlterField(
            model_name='chambreinternement',
            name='description',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='don',
            name='destination',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='employée',
            name='idPoste',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='comptabilite.poste'),
        ),
        migrations.AlterField(
            model_name='poste',
            name='particularite',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
