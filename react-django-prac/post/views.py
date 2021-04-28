from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import MovieSerializer, ReviewSerializer, PostSerializer
from .models import Movie, Review, Post
from django.http import HttpResponse

class MovieViewSet(viewsets.ModelViewSet):
    # name = request.POST['name']
    # print(name)
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer    

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer        


    # def movie_all(request):
    #     queryset = Movie.objects.all()
    #     serializer = MovieSerializer(queryset, many=True)
    #     return Response(serializer.data)        

    # def movie_02(request):
    #     queryset = Movie.objects.all()
    #     return HttpResponse('result02')        