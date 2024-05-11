export class MaxHeap {
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
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  private siftDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let biggerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] > this.heap[biggerChildIndex]
      ) {
        biggerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] >= this.heap[biggerChildIndex]) {
        break;
      }
      this.swap(index, biggerChildIndex);
      index = biggerChildIndex;
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
