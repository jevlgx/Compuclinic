# Generated by Django 3.2.5 on 2023-06-19 13:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('secretaire', '0009_auto_20230616_1606'),
        ('grh', '0004_alter_personnel_user'),
        ('utility', '0003_task'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='guest',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='personnel',
        ),
        migrations.AddField(
            model_name='schedule',
            name='guest_medecin',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='schedule_id', to='grh.personnel'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='guest_patient',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='schedule_id', to='secretaire.patient'),
        ),
        migrations.AddField(
            model_name='schedule',
            name='guests',
            field=models.ManyToManyField(blank=True, to='grh.Personnel'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='date_debut',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='date_fin',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='personnel',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='grh.personnel'),
        ),
    ]
