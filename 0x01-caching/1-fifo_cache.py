#!/usr/bin/env python3
"""
Fifo cache
"""
from base_caching import BaseCaching
from collections import OrderedDict


class FIFOCache(BaseCaching):
    """
    FIFOCache Class
    this class is an implementation of a cache system using the
    fifo strategy
    """

    def __init__(self):
        """
        Intialize the cache
        """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """
        Add an item to the cache
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            discard, _ = self.cache_data.popitem(False)
            print(f"DISCARD: {discard}")

    def get(self, key):
        """
        Retrieve an item from the cache
        """
        return self.cache_data.get(key, None)
