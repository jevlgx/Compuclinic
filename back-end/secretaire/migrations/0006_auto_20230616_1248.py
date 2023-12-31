# Generated by Django 3.2.5 on 2023-06-16 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('secretaire', '0005_alter_patient_sexe'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='height',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='pressure',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='symptomes',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='patient',
            name='temperature',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='patient',
            name='weight',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='patient',
            name='sexe',
            field=models.CharField(choices=[('M', 'Masculin'), ('F', 'Feminin')], default='M', max_length=1),
        ),
    ]
