class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head){
      return undefined;
    }
    let poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
      if(this.length === 0){
        return undefined;
      }
      let oldHead = this.head;
      if(this.length === 1){
        this.head = null;
        this.tail = null;
      }
      else{
         this.head = oldHead.next;
         this.head.prev = null;
         oldHead.next = null;
      }
      this.length--;
      return oldHead;
  }
  unshift(val){
    let newNode = new Node(val);
    if(this.length === 0){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length){
      return null;
    }
    let counter, currentNode;
    if(index <= this.length / 2){
      counter = 0;
      currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
    }
    else{
      counter = this.length -1;
      currentNode = this.tail;
      while(counter !== index){
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }
  set(index, val){
    let node = this.get(index);
    if(node != null){
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val){
      if(index < 0 || index > this.length){
        return false;
      }
      if(index === 0){
        return !!this.unshift(val);
      }
      if(index === this.length){
        return !!this.push(val);
      }

      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let currentNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = currentNode;
      currentNode.prev = newNode;

      this.length++;
      return true;
  }
  remove(index){
    if(index < 0 || index >= length){
      return undefined;
    }
    if(index === 0){
      return this.shift();
    }
    if(index === length - 1){
      return this.pop();
    }
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let afterNode = removedNode.next;
    prevNode.next = removedNode.next;
    afterNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;


  }
}

module.exports = DoublyLinkedList;
