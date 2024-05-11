export class MinHeap {
  private heap: number[] = [];

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }
  private getRightChildIndex(i: number) {
    return 2 * i + 2;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private siftUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  private siftDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  public push(value: number) {
    this.heap.push(value);
    this.siftUp();
  }

  public pop(): number {
    const value = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown();
    return value;
  }

  public size(): number {
    return this.heap.length;
  }

  public peek(): number {
    return this.heap[0];
  }
}

/**
A *MinHeap* is a specialized tree-based data structure that satisfies the heap property: in a min heap, for any given node C, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C. In simpler terms, the smallest key is always at the root of the tree, making min heaps particularly useful for problems where quick access to the smallest item is needed.

#### **Properties and Operations of a MinHeap:**
1. **Structure**: 
   - It is a **complete binary tree**. All levels are fully filled except possibly for the last level, which is filled from left to right.
   
2. **Operations**:
   - **Insert (Push)**:
     - When a new element is added to a min heap, it is initially placed at the lowest and rightmost empty space to maintain the complete tree property.
     - The new element then "bubbles up" to its correct position to maintain the heap property. This is done via a process called **sift-up**, where the new node is compared to its parent and swapped if it is smaller.
   - **Remove Min (Pop)**:
     - The root element, which is the smallest in a min heap, is removed.
     - The last element in the heap is moved to the root to maintain the complete tree structure.
     - This element then "bubbles down" to restore the heap property in a process called **sift-down**, where it is swapped with its smallest child until it is smaller than both its children.
   - **Find Min (Peek)**:
     - Since the smallest element is always at the root, it can be accessed directly, which is done in constant time, \(O(1)\).
*/
