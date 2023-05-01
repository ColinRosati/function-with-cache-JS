## Function With Cache

Simple cache storage bound to a function to reduce computation and reuse a store value

## Usage
In this example we add a cache to a simple double function which doubles the input number

```
function double(a) {
  if (getfnCache(double, a)) {
    return double.cache[a];
  }

  const res = a + 2;

  double.cache[a] = res;

  return res;
}
```

console.log(double(2)); // No cache added to cache
console.log(double(2)); // Returned from cache
console.log(double(3)); // No cache added to cache
console.log(double(3)); // Returned from cache
