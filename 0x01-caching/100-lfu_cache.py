#!/usr/bin/env python3
"""
LFU Caching System
"""
from base_caching import BaseCaching
from collections import OrderedDict, defaultdict


class LFUCache(BaseCaching):
    """
    LFU Caching class
    Implements an LFU Caching mechanism
    """
    def __init__(self):
        """
        Initialize the LFUCache instance
        """
        super().__init__()
        self.cache_data = OrderedDict()
        self.freq_count = defaultdict(int)

    def put(self, key, item):
        """
        Add Or update an item in the cache

        if adding the item causes the cache to exceed its maximum size,
        the lfu item is removed
        """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.cache_data[key] = item
            self.freq_count[key] += 1
            self.cache_data.move_to_end(key)
        else:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                min_freq = min(self.freq_count.values())
                lfu_keys = [
                    k for k, v in self.freq_count.items()
                    if v == min_freq
                    ]

                for k in self.cache_data:
                    if k in lfu_keys:
                        print(f"DISCARD: {k}")
                        del self.cache_data[k]
                        del self.freq_count[k]
                        break
            self.cache_data[key] = item
            self.freq_count[key] = 1
            self.cache_data.move_to_end(key)

    def get(self, key):
        """
        Retrieve an item from the cache
        MOves the item to the end of the frequency list to mark
        it as recently used
        returns none if the key is not found
        """
        if key is not None and key in self.cache_data:
            self.cache_data.move_to_end(key)
            self.freq_count[key] += 1
            return self.cache_data[key]
        return None
