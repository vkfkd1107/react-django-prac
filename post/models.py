from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=30)
    genre = models.CharField(max_length=15)
    year = models.IntegerField()
    def __str__(self):
        return self.title

class Review(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    def __str__(self):
        return self.title

class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    def __str__(self):
        return self.title