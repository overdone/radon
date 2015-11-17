from radon.models import *
from radon.serializers import *
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

class RoamingReportRowsList(APIView):
    """
    List all rows, or create a new row.
    """

    def get(self, request, format=None):
        
        rows = RoamingReportRef.objects.all()
        serializer = RoamingReportRefSerializer(rows, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
            serializer = RoamingReportRefSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RoamingReportRowDetail(APIView):
    """
    Get, update or delete a row.
    """
    def get_object(self, pk):
        try:
            return RoamingReportRef.objects.get(pk=pk)
        except RoamingReportRef.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        row = self.get_object(pk)
        serializer = RoamingReportRefSerializer(row)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        row = self.get_object(pk)
        serializer = RoamingReportRefSerializer(row, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        row = self.get_object(pk)
        row.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MproReportRowsList(generics.ListCreateAPIView):
    queryset = MproReportRef.objects.all()
    serializer_class = MproReportRefSerializer


class MproReportRowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MproReportRef.objects.all()
    serializer_class = MproReportRefSerializer