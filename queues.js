class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? `Queue Underflow` : this.front.data);

  enqueue = (data) => {
    if (this.isFull()) {
      console.log("Queue Overflow");
    } else {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.front = newNode;
        this.back = newNode;
      } else {
        this.back.next = newNode;
        this.back = newNode;
      }
      this.length++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      return removed.data;
    }
  };
}

const KFC = new Queue(10);
KFC.enqueue("Laila");
KFC.enqueue("Ayman");
KFC.enqueue("Hamza");
KFC.enqueue("Laila");
KFC.enqueue("Ayman");
KFC.enqueue("Mahmood");

console.log(KFC.peek());
console.log(KFC.dequeue());
console.log(KFC.peek());
