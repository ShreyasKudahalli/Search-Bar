from django.shortcuts import render
from django.http import JsonResponse


def getProducts(request):
    search = request.GET.get('search', '').lower()

    products = [
        {'id': 1, 'name': 'Laptop'},
        {'id': 2, 'name': 'Mouse'},
        {'id': 3, 'name': 'Keyboard'},
    ]

    results = [
        product for product in products
        if search in product['name'].lower()
    ]

    return JsonResponse(results, safe=False)