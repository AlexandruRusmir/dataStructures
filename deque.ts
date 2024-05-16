type DequeNode<T> = {
  value: T;
  prev?: DequeNode<T>;
  next?: DequeNode<T>;
};

export class Deque<T = any> {
  protected front?: DequeNode<T>;
  protected back?: DequeNode<T>;
  protected _size: number = 0;

  constructor(...initialValues: T[]) {
    for (const initialValue of initialValues) {
      this.addBack(initialValue);
    }
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  addFront(value: T) {
    this._size++;
    const newNode: DequeNode<T> = { value, next: this.front };
    if (!this.front) {
      this.front = this.back = newNode;
    } else {
      this.front.prev = newNode;
      this.front = newNode;
    }
  }

  removeFront() {
    if (!this.front) {
      return undefined;
    }
    this._size--;
    const value = this.front.value;
    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      this.front = this.front.next!;
      this.front.prev = undefined;
    }
    return value;
  }

  peekFront() {
    return this.front?.value;
  }

  addBack(value: T) {
    this._size++;
    const newNode: DequeNode<T> = { value, prev: this.back };
    if (!this.back) {
      this.front = this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  removeBack() {
    if (!this.back) {
      return undefined;
    }
    this._size--;
    const value = this.back.value;
    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      this.back = this.back.prev!;
      this.back.next = undefined;
    }
    return value;
  }

  peekBack() {
    return this.back?.value;
  }
}
