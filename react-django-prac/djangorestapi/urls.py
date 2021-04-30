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
    # 이 url로 접속 시 http://127.0.0.1:8000/movie/movie_all/?name=Test
    # path('movie_all/', views.MovieViewSet.movie_all),
    # path('movie_all/', views.MovieViewSet.movie_all),
    # path('movie/movie_param/', views.MovieViewSet.movie_param),
]