from django.db import models

class Vote(models.Model):
    choice = models.CharField(max_length=32)
    ip = models.IPAddressField()
    time = models.DateTimeField(auto_now=True)
