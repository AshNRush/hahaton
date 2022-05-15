from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('points/', views.PointList.as_view()),
    path('useradd/<int:user>/<int:point>/', views.user_add),
    path('check/<int:token>/', views.check),
    path('point/<int:pk>/', views.PointDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
