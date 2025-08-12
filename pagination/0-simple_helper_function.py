#!/usr/bin/env python3


def index_range(page, page_size):
    t = (page - 1) * page_size
    e = page * page_size
    return t, e
