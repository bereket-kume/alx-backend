#!/usr/bin/env python3
"""
LIFO Caching System
"""
from base_caching import BaseCaching
from collections import OrderedDict


class LIFOCache(BaseCaching):
    """
    LIFO Caching System Class
    this class implements a LIFO Caching mechanism
    """
    def __init__(self):
        """
        Initialize the LIFOCache instance
        """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """
        Add or update an item in the cache
        """
        if key is None or item is None:
            return

        if key not in self.cache_data:
            if len(self.cache_data) + 1 > BaseCaching.MAX_ITEMS:
                discard, _ = self.cache_data.popitem(True)
                print(f"DISCARD: {discard}")
        self.cache_data[key] = item
        self.cache_data.move_to_end(key, last=True)

    def get(self, key):
        """
        Retrieve an item from the cache
        """
        return self.cache_data.get(key, None)
