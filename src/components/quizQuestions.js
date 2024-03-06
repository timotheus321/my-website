const quizQuestions = [
  {
    question: "What is the primary benefit of using a linked list over an array?",
    options: ["Dynamic size", "Better performance for large datasets", "Easier access to elements", "Fixed size"],
    answer: "Dynamic size",
    knowledge: `The primary benefit is dynamic size. Unlike arrays, linked lists can grow and shrink at runtime, thanks to their dynamic memory allocation. Here's a simple JavaScript code example of a linked list node:

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);`
  },
  {
    question: "What is the time complexity of accessing an element by value in a singly linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(n)",
    knowledge: `Accessing an element by value in a singly linked list requires O(n) time because, in the worst case, you may need to traverse the entire list to find the element. Unlike arrays, linked lists do not provide direct access to their elements via indices.

// Traversing a linked list to find a value
function findValue(head, value) {
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.data === value) return currentNode;
    currentNode = currentNode.next;
  }
  return null; // Value not found
}`
  },
  {
    question: "In a doubly linked list, each node contains how many references to other nodes?",
    options: ["1", "2", "3", "None"],
    answer: "2",
    knowledge: `Each node in a doubly linked list contains two references: one to the next node and one to the previous node. This allows traversal in both directions.

class DoublyLinkedNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}`
  },
  // More questions...
];

export default quizQuestions;