class Queue {

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
    this.isRunning = false;
  }

  enqueue(element, ...params) {
    this.elements[this.tail] = this.isFunc(element) ? () => element(...params) : element;
    this.tail++;
    this.run();
  }

  next() {
    if (this.isEmpty) return null;
    delete this.elements[this.head];
    this.head++;
  }

  peek() {
    if (this.isEmpty) return null;

    const res = this.elements[this.head];

    return this.isFunc(res) ? res() : res;
  }

  isFunc(element) {
    return typeof element === 'function';
  }

  get length() {
    const res = this.tail - this.head;
    return res <= 0 ? 0 : res;
  }

  get isEmpty() {
    return this.length === 0;
  }

  run() {
    try {
      if (!this.isRunning) {
        this.isRunning = true;
        while (!this.isEmpty) {
          console.log(this.peek());
          this.next();
        }
        this.isRunning = false;
      }
    } catch (e) {
      this.isRunning = false;
    }

  }

}
