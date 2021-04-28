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
    # path('',views.MovieViewSet.movie_all),
    # path('movie/custom/', views.MovieViewSet.movie_all),
    # path('movie/custom2/', views.MovieViewSet.movie_02)
]