from django.db import models


class Point(models.Model):
    lat = models.FloatField()
    lon = models.FloatField()
    name = models.CharField(max_length=250)
    fragment = models.TextField()


class User(models.Model):
    name = models.CharField(max_length=250)
    phone = models.CharField(max_length=250)
    passedPoints = models.ManyToManyField(Point, blank=True)
