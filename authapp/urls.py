from django.contrib.auth import login
from django.urls import path


app_name = 'authapp'

urlpatterns = [
    path('login/', login, name='login')
]