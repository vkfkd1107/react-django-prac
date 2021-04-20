from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from post import views

router = routers.DefaultRouter()
router.register('movie', views.MovieViewSet)
router.register('review', views.ReviewViewSet)
router.register('post', views.PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]