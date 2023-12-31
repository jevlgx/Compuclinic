# Generated by Django 3.2.5 on 2023-06-19 13:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('secretaire', '0009_auto_20230616_1606'),
        ('grh', '0004_alter_personnel_user'),
        ('consultation', '0003_auto_20230619_0813'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='consultation',
            name='antecedents',
        ),
        migrations.RemoveField(
            model_name='consultation',
            name='symptomes',
        ),
        migrations.AddField(
            model_name='consultation',
            name='medecin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='grh.medecin'),
        ),
        migrations.AddField(
            model_name='consultation',
            name='patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='secretaire.patient'),
        ),
        migrations.AlterField(
            model_name='consultation',
            name='prescriptions',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='consultation',
            name='remarque',
            field=models.CharField(blank=True, max_length=1024, unique=True),
        ),
    ]
