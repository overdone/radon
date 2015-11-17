from radon.models import *
from radon.serializers import *
from rest_framework import viewsets

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(('GET',))
def api_root(request, format=None):
    return Response({
        'roamings': reverse('roaming', request=request, format=format),
        'mpros': reverse('mpro', request=request, format=format)
    })


class RoamingReportViewSet(viewsets.ModelViewSet):
    """
    Roaming report reference ViewSet 
    """
    queryset = RoamingReportRef.objects.all()
    serializer_class = RoamingReportRefSerializer


class MproReportViewSet(viewsets.ModelViewSet):
    """
    Mpro report reference ViewSet
    """
    queryset = MproReportRef.objects.all()
    serializer_class = MproReportRefSerializer