from . import views
from django.urls import path

urlpatterns = [
    path('products/', views.getProducts, name='products'),
]
