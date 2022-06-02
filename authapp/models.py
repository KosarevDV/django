from django.db import models
from django.contrib.auth.models import AbstractUser


class ShopUser(AbstractUser):
    avatar = models.ImageField(upload_to='users', blank=True, verbose_name='аватарка')
    age = models.SmallIntegerField(verbose_name='возраст')
