---
id: insertion-sort
title: Insertion Sort
sidebar_label: Insertion Sort
---

Insertion sort picks an element in an array and inserts it in its correct position between 0 and the element preceding it

O(n<sup>2</sup>)

### Code

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const [item] = arr.splice(i, 1);
        arr.splice(j, 0, item);
      }
    }
  }
  return arr;
}
```
