from django.db import models


# Create your models here.

class Manga(models.Model):
    nombre = models.CharField(max_length=200)
    autor = models.CharField(max_length=200)
    genero = models.CharField(max_length=200)
    demografia = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
    puntuacion = models.CharField(max_length=10)
    estado = models.CharField(max_length=20)
    sinopsis = models.TextField(blank=True)

    def __str__(self):
        return self.nombre
