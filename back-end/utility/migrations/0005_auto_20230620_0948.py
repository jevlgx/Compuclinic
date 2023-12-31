# Generated by Django 3.2.5 on 2023-06-20 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utility', '0004_auto_20230619_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='date_debut',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='duree',
            field=models.IntegerField(default=60),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='lieu',
            field=models.CharField(default='Bloc 1', max_length=20),
        ),
    ]
