#!/usr/bin/env python3
"""
Index Range
"""


def index_range(page, page_size):
    """
    function that takes two integer argument
    return start index and end index
    """
    start_index = (page - 1) * page_size
    end_index = page* page_size
    return (start_index, end_index)
