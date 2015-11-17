from rest_framework import serializers

from radon.models import RoamingReportRef, MproReportRef

class RoamingReportRefSerializer(serializers.ModelSerializer):

    class Meta:
        model = RoamingReportRef
        fields = ('lcal_id', 'group_id', 'srls_id', 'branch_id', 'price')
        read_only_fields = ('insert_at', 'update_at')

        def insert(self, validated_data):
            return RoamingReportRef.objects.create(**validated_data)

        def update(self, instance, validatetd_data):
            instance.lcal_id = validated_data.get('lcal_id', instance.lcal_id)
            instance.group_id = validated_data.get('group_id', instance.group_id)
            instance.srls_id = validated_data.get('srls_id', instance.srls_id)
            instance.branch_id = validated_data.get('branch_id', instance.branch_id)
            instance.price = validated_data.get('price', instance.price)

            instance.save()

            return instance


class MproReportRefSerializer(serializers.ModelSerializer):

    class Meta:
        model = MproReportRef
        fields = ('service_id', 'option_id', 'kp_id', 'owner_id', 'price')
        read_only_fields = ('insert_at', 'update_at')

        def insert(self, validated_data):
            return MproReportRef.objects.create(**validated_data)

        def update(self, instance, validatetd_data):
            instance.service_id = validated_data.get('service_id', instance.service_id)
            instance.option_id = validated_data.get('option_id', instance.option_id)
            instance.kp_id = validated_data.get('kp_id', instance.kp_id)
            instance.owner_id = validated_data.get('owner_id', instance.owner_id)
            instance.price = validated_data.get('price', instance.price)

            instance.save()

            return instance