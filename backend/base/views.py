from django.http import JsonResponse
from .models import Products


class TrieNode:
    def __init__(self):
        self.children = {}
        self.suggestions = []


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, product):
        node = self.root

        for ch in product["name"].lower():
            if ch not in node.children:
                node.children[ch] = TrieNode()

            node = node.children[ch]

            if len(node.suggestions) < 3:
                node.suggestions.append(product)

    def search(self, prefix):
        node = self.root

        for ch in prefix.lower():
            if ch not in node.children:
                return []

            node = node.children[ch]

        return node.suggestions



def getProducts(request):
    search = request.GET.get("search", "")

    trie = Trie()

    products = Products.objects.all().order_by("name")

    for product in products:
        trie.insert({
            "id": product.id,
            "name": product.name
        })

    results = trie.search(search)

    return JsonResponse(results, safe=False)