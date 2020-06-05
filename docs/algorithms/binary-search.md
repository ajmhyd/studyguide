---
id: binary-search
title: Binary Search
sidebar_label: Binary Search
---

Binary search is an efficient algorithm for finding an element within a sorted list. It repeatedly divides the list in half until the element is found or there are no other elements left to search.

## Code

```js
function binarySearch(list, item) {
  // sort list in ascending order
  list.sort((a, b) => a - b);
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let mid = Math.floor(list.length / 2);
    if (list[mid] === item) {
      return true;
    } else if (list[mid] < item) {
      low = mid + 1
    } else if (list[mid] > item) {
      high = mid - 1;
    }
  }
  return false;
}
```
