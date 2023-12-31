# Generated by Django 4.1.7 on 2023-06-09 19:15

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Manga',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manga_uuid', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('nombre', models.CharField(max_length=200)),
                ('autor', models.CharField(max_length=200)),
                ('genero', models.CharField(max_length=200)),
                ('demografia', models.CharField(max_length=200)),
                ('tipo', models.CharField(max_length=200)),
                ('link', models.CharField(max_length=200)),
                ('puntuacion', models.CharField(max_length=10)),
                ('estado', models.CharField(max_length=20)),
                ('sinopsis', models.TextField(blank=True)),
            ],
        ),
    ]
