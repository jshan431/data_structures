const SinglyLinkedList = require('./singlyLinkedList.js');
let newList = new SinglyLinkedList();
newList.push(225);
newList.push(300);
newList.push("Hello");
newList.print();
console.log("popping");
newList.pop();
newList.print();
console.log("shifting");
newList.shift();
newList.print();
