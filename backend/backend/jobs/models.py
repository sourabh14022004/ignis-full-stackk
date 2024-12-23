# models.py
from django.db import models

class Job(models.Model):
    job_id = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.JSONField(null=True)
    description = models.TextField(null=True, blank=True)
    salary = models.JSONField(null=True, blank=True)
    employment_type = models.CharField(max_length=50, null=True)
    location_type = models.CharField(max_length=50, null=True)
    posted_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)
    details_url = models.URLField(max_length=500, null=True)
    company_url = models.URLField(max_length=500, null=True)
    company_logo = models.URLField(max_length=500, null=True)
    is_easy_apply = models.BooleanField(default=False)
    willing_to_sponsor = models.BooleanField(default=False)
    employer_type = models.CharField(max_length=100, null=True)
    guid = models.CharField(max_length=100, null=True)

    class Meta:
        db_table = 'jobs'
        ordering = ['-posted_at']

# serializers.py
from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

# views.py
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
    def create(self, request, *args, **kwargs):
        job_id = request.data.get('job_id')
        if job_id:
            job, created = Job.objects.update_or_create(
                job_id=job_id,
                defaults=request.data
            )
            serializer = self.get_serializer(job)
            return Response(serializer.data)
        return super().create(request, *args, **kwargs)

# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

# settings.py additions
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'job_board',
        'USER': 'root',
        'PASSWORD': 'root1234',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

INSTALLED_APPS = [
    # ...
    'rest_framework',
    'your_app_name',
]