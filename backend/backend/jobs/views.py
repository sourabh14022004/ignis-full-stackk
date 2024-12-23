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