#!/usr/bin/env python3
""" pymongo list """

import pymongo


def list_all(mongo_collection):
    return list(mongo_collection.find())
