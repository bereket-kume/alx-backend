#!/usr/bin/env python3
"""
Basic Caching
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache is a caching system that inherits from BaseCaching
    this cache has n limit on the number of items it can store
    """

    def put(self, key, item):
        """
        Add an item in the cache

        Args:
            key: The key to identify the item
            item: the value to be stored in the cache
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """
        Get an item by key

        Args:
            key: the key to identify the item

        Returns:
            the value associated with the key. or None
            if the key doesn't exist
        """

        return self.cache_data.get(key, None)
