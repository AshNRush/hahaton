from rest_framework import serializers
from .models import User, Point


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = ['id', 'lat', 'lon', 'name', 'fragment']


class UserSerializer(serializers.ModelSerializer):
    passedPoints = PointSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'phone', 'passedPoints']
