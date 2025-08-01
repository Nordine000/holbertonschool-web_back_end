#!/usr/bin/env python3
from typing import Iterable, Sequence, List, Tuple

def element_lenght(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
