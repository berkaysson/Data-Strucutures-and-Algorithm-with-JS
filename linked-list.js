class Node {
  constructor(value, next = null) {
    this.value = value;
    this.nextNode = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    // adds a new node to start of the list
    this.head = new Node(value, this.head);
    this.size++;
  }

  append(value) {
    let tailNode = new Node(value);
    this.tail = tailNode;
    let current = this.head;

    if (current === null) {
      this.prepend(value);
    } else {
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = tailNode;
    }

    this.size++;
  }

  insertAt(value, index) {
    if(index>this.size || index < 0) return 'Out of size'
    else if(index === 0) this.prepend(value)
    else if(index === this.size) this.append(value)
    else{
        let node = new Node(value);
        let current = this.head;
        let count = 0;
        let previous;
        while(count < index){
            previous = current;
            current = current.nextNode 
            count++
        }

        node.nextNode = current
        previous.nextNode = node

        this.size++
    }
  }

  removeAt(index) {
    if(index>this.size || index < 0) return 'Out of size'
    else if(index === this.size) this.pop()
    else if (index === 0) {
        this.head = this.head.nextNode
    }
    else{
        let current = this.head;
        let previous
        for (let i = 0; i < this.size; i++) {
            if (i === index) {
              previous.nextNode = current.nextNode;
            }
            previous = current;
            current = current.nextNode;
        }
    }
  }

  pop() {
    let current = this.head;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    console.log(this.tail.value + " popped");
    current.nextNode = null;
    this.tail = current;
    this.size--;
  }

  at(index) {
    let current = this.head;
    if (index > this.size) return "Out of size";
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        return current;
      }
      current = current.nextNode;
    }
  }

  find(value) {
    let current = this.head;
    let count = 0;
    if (!this.contains(value)) return null;
    while (current) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
  }

  contains(value) {
    if (this.allList().includes(value)) return true;
    return false;
  }

  allList() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.nextNode;
    }

    return arr;
  }

  toString() {
    let str = "";
    for (let value of this.allList()) {
      str += `(${value}) -> `;
    }
    str += ` null`;
    return str;
  }
}

const ll = new LinkedList();
ll.prepend(100);
ll.prepend(30);
ll.prepend(200);
ll.append(1);
ll.append(2);
console.log(ll.toString());
ll.removeAt(4)
console.log(ll.toString());
