# Generated by Django 3.2.5 on 2023-06-22 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grh', '0004_alter_personnel_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personnel',
            name='matricule',
            field=models.CharField(max_length=20),
        ),
    ]
