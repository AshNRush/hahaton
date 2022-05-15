from django.http import HttpResponse
from rest_framework import generics
from . import serializers
from .models import User, Point
from django.shortcuts import redirect


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class PointList(generics.ListCreateAPIView):
    queryset = Point.objects.all()
    serializer_class = serializers.PointSerializer


class PointDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Point.objects.all()
    serializer_class = serializers.PointSerializer


def user_add(request, user, point):
    print(user)
    u = User.objects.get(id=user)
    print(u)
    print(point)
    p = Point.objects.get(id=point)
    u.passedPoints.add(p)
    print('ok')
    return redirect(f'/user/{user}')
