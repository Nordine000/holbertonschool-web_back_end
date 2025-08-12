import csv
import math
from typing import List


def index_range(page, page_size):
        t = (page - 1) * page_size
        e = page * page_size
        return t, e


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset


    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
            assert isinstance(page, int) and page > 0
            assert isinstance(page_size, int) and page_size > 0
            t, e = index_range(page, page_size)
            dataset = self.dataset()

            return [] if t >= len(dataset) else dataset[t:e]
        
    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        data = self.get_page(page, page_size)
        
        all_pages = math.ceil(len(self.dataset()) / page_size )
        
        prev_page = page - 1 if page > 1 else None
        next_page = page + 1 if page < all_pages else None
        
                # Return a dictionary with pagination information
        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": all_pages,
        }