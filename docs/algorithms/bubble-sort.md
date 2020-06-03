---
id: bubble-sort
title: Bubble Sort
sidebar_label: Bubble Sort
---

Bubble sort is a sorting algorithm where each value in an array is compared to the next and swapped if the value on the left is greater than the value on the right.

Bubble sort is notorious for being non-performant with a runtime of O(n<sup>2</sup>)

You can use nested for-loops or a do while loop _which reads a bit cleaner and can be more performant_

The do-while loop solution will stop once a full pass is completed without swapping any items. This contrast the nested for-loop solution which will test every item against every other regardless of if a swap has occurred

## Code

### Bubble Sort With A Do-While Loop

```js
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);
  return arr;
}
```

### Bubble Sort With For-Loops

```js
function bubbleSortWithForLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
```
