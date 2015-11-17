from django.db import models


class RoamingReportRef(models.Model):
    """
    Roaming report price reference
    """
    lcal_id = models.IntegerField()
    group_id = models.IntegerField()
    srls_id = models.IntegerField()
    branch_id = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    insert_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:  
        ordering = ["price"]
        unique_together = ('lcal_id', 'group_id', 'srls_id', 'branch_id', 'price')


class MproReportRef(models.Model):
    """
    Mpro report price reference
    """
    service_id = models.IntegerField()
    option_id = models.IntegerField()
    kp_id = models.IntegerField()
    owner_id = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    insert_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:  
        ordering = ["service_id"]
        unique_together = ('service_id', 'option_id', 'kp_id', 'price')
