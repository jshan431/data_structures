class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    if(this.root === null){
        this.root = newNode;
    }
  }
}
