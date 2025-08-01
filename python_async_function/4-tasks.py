#!/usr/bin/env python3
"""
Module contenant la fonction task_wait_n qui utilise des coroutines asynchrones.
"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Lance n tâches asynchrones et retourne la liste des délais dans l'ordre croissant.

    Args:
        n (int): Nombre de fois que la tâche est lancée.
        max_delay (int): Délai maximum pour chaque tâche.

    Returns:
        List[float]: Liste des délais d'attente, triés.
    """
    delays = [task_wait_random(max_delay) for _ in range(n)]
    return sorted(await asyncio.gather(*delays))
