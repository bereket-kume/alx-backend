#!/usr/bin/env python3
"""
Index Range
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """
    function that takes two integer argument
    return start index and end index
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
