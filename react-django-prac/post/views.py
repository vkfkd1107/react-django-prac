from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import MovieSerializer, ReviewSerializer, PostSerializer
from .models import Movie, Review, Post
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


class MovieViewSet(viewsets.ModelViewSet):
    # class로 접속 시 아래의 function은 실행하지 않는다
    # url: /movie       // parameter가 없는 movie의 전체 데이터. parameter가 없는 개별 데이터도 조회가능하다

    # urls.py에 class의 url만 명시해주면 view로는 '/'로 접근할 수 있다.     
    # // view에 대한 url은 urls.py에 명시하지 않는다
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    print('movie class')
# @action: 사용자 정의 액션. GET요청에 응답. 
#           POST 요청에 응답한 작업을 원한다면 method 인수를 사용할 수 있다

# 사용자 지정 작업의 URL은 기복적으로 메서드 이름 자체에 따라 다르다
# url을 구성하는 방법을 변경하려면 url_path를 데코레이터 키워드 인수로 포함 할 수 있다

# detail: action은 첫번째 인자로 detail값을 받는다. 
#           Boolean으로서 True일 경우, pk값을 지정해줘야하는 경우 사용한다. 특정값에 대한 사항을 확인할 수 있다
#           False인 경우 목록 단위로 적용하게 된다


# movie_all view는 request가 요청 됐을 때 request를 모두 받아 curd를 실행할 수 있음.
# 예를 들어 특정 제품(pk 를 이용)을 선택한 후 그 제품의 속성에 대해 crud를 실행할 때 쓸 수 있음
    # @action(detail=True, methods=['get', 'post', 'delete', 'put', 'patch'])
    # def movie_all(request, pk=None):
    #     queryset = Movie.objects.all()
    #     serializer = MovieSerializer(queryset, many=True)
    #     return Response(serializer.data)
    #     # return self.list(request)


#   parameter가 있는 movie의 전체 데이터
#   이 함수를 부를때는 request가 있는 경우만 부르도록 한다
#   url: movie/movie_param/?{parameter=data}        //class이름/함수이름/parameter
    @action(detail=False, methods=['get', 'post', 'delete', 'put'], name='Change Password')
    def movie_param(self, request):        
        print('movie param')
        if(request!=None or request!='' or request!=' '):            
            # name을 불러온다.
            # request를 받을 시 무조건 url에 ?name 등과 같은 parameter가 붙어야 된다
            print("name: "+request.query_params['name'])
            print("name2: "+request.query_params['name2'])
            print("name3: "+request.query_params['name3'])
            print("name4: "+request.query_params['name4'])
            # print("param: "+request.query_params['param'])
            print(request)
            queryset = Movie.objects.all()
            serializer = MovieSerializer(queryset, many=True)
            return Response(request.query_params)
        else:
            print("request is null")
            queryset = Movie.objects.all()
            serializer = MovieSerializer(queryset, many=True)
            return Response(serializer.data)

#   parameter가 있는 movie의 개별 데이터
#   이 함수를 부를때는 request가 있는 경우만 부르도록 한다
#   url: movie/5/movie_all     //class이름/pk/함수이름
    @action(detail=True, methods=['get', 'post', 'delete', 'put'], name='movie_all')
    def movie_detail(self, request, pk=None):
        # queryset = Movie.objects.all()
        # serializer = MovieSerializer(queryset, many=True)
        # return Response(serializer.data)        
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

#   axios를 이용한 data를 보내고 받는 것
    @action(detail=False, methods=['get', 'post', 'delete', 'put'], name='movie_all')
    def movie_data(self, request):
        queryset = Movie.objects.all()
        serializer = MovieSerializer(queryset, many=True)
        print(request)
        print(request.method)
        print(request.data)      
        print(request.data['name'])     
        return Response(serializer.data)

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