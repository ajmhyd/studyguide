---
id: merge-sort
title: Merge Sort
sidebar_label: Merge Sort
---

Merge sort is a _divide and conquer_ algorithm which means it divides its input array into two halves and recursively calls itself on each half, then merges the two sorted halves back together

`O(n log n)` time complexity

The mergeSort function is responsible for splitting the array into smaller sub-arrays while the merge function is the function which sorts the arrays.

## Code

```js
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  let results = [...sorted, ...left, ...right];
  return results;
}
```
