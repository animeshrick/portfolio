from django.db import models

# Create your models here.

class Job(models.Model):
    #image
    image = models.ImageField(upload_to = 'images/')
    #short bio
    short_bio = models.CharField(max_length= 100)
    #text
    text = models.CharField(max_length= 1000)
    


    def __str__(self):
        return self.short_bio