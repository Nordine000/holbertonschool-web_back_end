#!/usr/bin/env python3

""" Pagination """

from typing import Tuple


def index_range(page, page_size):
    """ returns tuple of size two containing a start index and an end index """
    t = (page - 1) * page_size
    e = page * page_size
    return t, e
