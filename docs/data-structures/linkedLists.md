---
id: linkedLists
title: Linked Lists
sidebar_label: Linked Lists
---

- Like arrays, linked lists are used to represent sequential data

- The benefit of linked lists is that insertion and deletion from anywhere in the list is `O(1)` whereas in arrays the following elements will have to be shifted

- Linked lists are a series of linked nodes where each node points to the
next node in the list.

  - Each node has a value and a pointer to the next node

- Two pointer approaches are also common for linked lists. For example:

  - **Getting the `kth` from last node** - Have two pointers, where one is `k` nodes ahead of the other. When the node ahead reaches the end, the other node is `k` nodes behind

  - **Detecting cycles** - Have two pointers, where one pointer increments twice as much as the other, if the two pointers meet, means that there is a cycle

  - **Getting the middle node** - Have two pointers, where one pointer increments twice as much as the other. When the faster node reaches the end of the list, the slower node will be at the middle

## Singly vs. Doubly-Linked Lists

Linked lists can be singly, or doubly-linked. In a singly-linked list, each
node has one pointer which points to the next element in the list. In a
doubly-linked list, each node has two pointers: one which points to the
next element in the list and one which points to the previous element in
the list.

Doubly-linked lists are great for removing nodes because they provide
access to the previous and the next nodes. To remove a node from a
singly-linked list, we have to iterate through the list, keeping track of
the previous node.

## Methods

- `push(item)` Adds an element to the linked list

- `pop()` Removes an element from the linked list

- `get(index)` Returns an element from a given index

- `delete(index)` Deletes an item from a given index

- `isEmpty()` Returns a boolean indicating whether the list is empty

---

## Code

### Singly Linked List

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.length++;
  }

  pop() {
    // empty list
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      // one node in list
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      // multiple nodes in list
      let currentNode = this.head;
      const nodeToRemove = this.tail;
      let secondToLastNode;

      while(currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    // index is invalid
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    let currentNode = this.head;
    let counter = 0;

    while(counter < index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  delete(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.get(index -1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
}
```

---

## Recommended LeetCode questions

- [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)

- [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/)

- [Merge Two Sorted List](https://leetcode.com/problems/merge-two-sorted-lists/)

- [Merge K Sorted List](https://leetcode.com/problems/merge-k-sorted-lists/)

- [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

- [Reorder List](https://leetcode.com/problems/reorder-list/)
