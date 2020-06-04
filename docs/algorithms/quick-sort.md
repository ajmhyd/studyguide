---
id: quick-sort
title: Quick Sort
sidebar_label: Quick Sort
---

Quick sort is a _divide and conquer_ algorithm. It picks an element as a pivot element and partitions the array around the pivot

There are several methods of picking a pivot element:

- Always pick the first element

- Always pick the last element

- Pick a random element

- Pick the median element

`O(n log n)` average runtime

## Code

```js
function quickSort(array) {
  if (array.length < 2) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  let less = [];
  let greater = [];
  for (let i in array) {
    if (i !== pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
```
