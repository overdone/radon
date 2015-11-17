from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import *

urlpatterns = [
    url(r'^rep1/$', RoamingReportRowsList.as_view()),
    url(r'^rep1/(?P<pk>[0-9]+)/$', RoamingReportRowDetail.as_view()),
    url(r'^rep2/$', MproReportRowsList.as_view()),
    url(r'^rep2/(?P<pk>[0-9]+)/$', MproReportRowDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)