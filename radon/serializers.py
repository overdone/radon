from rest_framework import serializers

from radon.models import RoamingReportRef, MproReportRef

class RoamingReportRefSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = RoamingReportRef
        fields = ('lcal_id', 'group_id', 'srls_id', 'branch_id', 'price')
        read_only_fields = ('insert_at', 'update_at')


class MproReportRefSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = MproReportRef
        fields = ('service_id', 'option_id', 'kp_id', 'owner_id', 'price')
        read_only_fields = ('insert_at', 'update_at')
