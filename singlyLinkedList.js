//SinglyLinkedList
//Define a Class Node which stores a value and a reference to the next node.
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
//SinglyLinkedList should contain a length, head, and tail property
class SinglyLinkedList{
    constructor(){
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    //Define a push method that adds a new node to the linked list
    push(val){
      let newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      }
      else{
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    //define a pop method
    pop(){
      if(!this.head){
        return undefined;
      }
      let current = this.head;
      let newTail = current
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current;
    }
    //define a shift method
    shift(){
        if(!this.head) return undefined
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
          this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
          this.head = newNode;
          this.tail = this.head;
        }
        else{
          newNode.next = this.head;
          this.head = newNode;
        }
        this.length++;
        return this;
    }
    //define a get function that retrieves a node by it's index position
    get(index){
        if(index < 0 || index >= this.length){
          return null;
        }
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++
        }
        return currentNode;
    }
    //Define a set method
    set(val, index){
        let foundNode = this.get(index);
        if(foundNode){
          foundNode.val = val;
          return true;
        }
        return false;
    }
    //Define a method called insert
    insert(val, index){
        if(index < 0 || index > this.length){
          return false;
        }
        if(index === this.length){
          this.push(val);
          return true;
        }
        else if(index === 0){
          this.unshift(val);
          return true;
        }
        else{
          let newNode = new Node(val);
          let prevNode = this.get(index - 1);
          let temp = prevNode.next;
          newNode.next = temp;
          prevNode.next = newNode;
          this.length++;
          return true;
        }
    }
    //define a method called remove
    remove(index){
        if(index < 0 || index > this.length){
          return undefined;
        }
        if(index === this.length - 1){
          return this.pop();
        }
        else if(index === 0){
          return this.shift();
        }
        else{
          let prevNode = this.get(index - 1);
          let removed = prevNode.next;
          prevNode.next = removed.next;
          this.length--;
          return removedNode;
        }
    }
    //define a method called reverse
    reverse(){
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next;
      let prev = null;
      for(let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    //Print all of the items in the linked List
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

module.exports = SinglyLinkedList;
/*
let newList = new SinglyLinkedList();
newList.push(25);
newList.print();
*/
