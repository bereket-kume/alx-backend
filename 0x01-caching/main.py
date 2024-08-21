from functools import lru_cache

@lru_cache(maxsize=10)
def cache_try(x):
    print(f"Calculating for {x}")
    return x * x

print(cache_try(4))
print(cache_try(4))
print(cache_try(5))
print(cache_try(5))

