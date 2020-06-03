---
id: big-o
title: Big-O
sidebar_label: Big-O
---

Big-O notation is used in computer science to describe the worst-case performance _upper bound_, or complexity, of an algorithm

## Constant Time

`O(1)` describes an algorithm which will execute in the same amount of time regardless of the amount of data

```js
function sayHi() {
  return 'Hello World';
}
```

## Logarithmic Time

`O(log n)` describes an algorithm which is logarithmic in nature _the size of the problem decreased by half each time it runs_ `binary search`

```js
function binarySearch(list, item) {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === item) {
      return true;
    } else if (guess < item ) {
      low = mid + 1;
    } else if (guess > item) {
      high = mid - 1;
    }
  }
  return false;
}
```

## Linear Time

`O(n)` describes an algorithm whose performance grows linearly and
proportionally to the size of the input `for loop`

```js
function printDogs(dogsArray) {
  for (let i = 0; i < dogsArray.length; i++) {
    console.log(dogsArray[i]);
  }
}
```

## Super-Linear Time

`O(n log n)` is less-performant than a linear time algorithm but more performant than an exponential algorithm. `heap sort`, `merge sort`, `quick sort`

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

## Polynomial Time

O(n<sup>2</sup>) describes an algorithm where the performance is directly proportional to the square of the data size `two nested for-loops`, `bubble sort`

```js
function bubbleSort(arr) {
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

## Exponential Time

O(2<sup>n</sup>) algorithms double with each new data point `Fibonacci`

```js
function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

## Factorial Time

`O(n!)` is the worst-performing algorithm because it grows rapidly as the size of n increases _traveling salesman brute force solution_
