const quizQuestions = [
    {
      category: "LinkedList",
      difficulty: 1,
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
      category: "LinkedList",
      difficulty: 1,
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
      category: "LinkedList",
      difficulty: 1,
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
    {
      category: "LinkedList",
      difficulty: 1,
      question: "How can a linked list be used to implement a stack?",
      options: ["By adding and removing elements from the start of the list", "By only allowing access to the last element", "By sorting elements as they are added", "By linking all elements directly to the first node"],
      answer: "By adding and removing elements from the start of the list",
      knowledge: `A stack follows Last In, First Out (LIFO) principle, and a linked list can easily support this by adding and removing elements from the head of the list, allowing for O(1) time complexity for both operations. This makes linked lists an efficient underlying data structure for stack implementations.
  
  // Example of stack using a linked list
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(data) {
      let newNode = new ListNode(data);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop() {
      if (this.top === null) return null;
      let data = this.top.data;
      this.top = this.top.next;
      return data;
    }
  }`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "Why are linked lists preferred over arrays for implementing queues?",
      options: ["Faster access time", "Better space utilization", "Efficient insertion and deletion at both ends", "Fixed memory allocation"],
      answer: "Efficient insertion and deletion at both ends",
      knowledge: `Linked lists facilitate efficient insertions and deletions at both ends, which is crucial for a queue's First In, First Out (FIFO) nature. Adding elements at the tail and removing from the head can both be done in O(1) time with a doubly linked list, unlike arrays which may require shifting elements for enqueue or dequeue operations.
  
  // Example of queue using a doubly linked list
  class Queue {
    constructor() {
      this.head = this.tail = null;
    }
  
    enqueue(data) {
      let newNode = new DoublyLinkedNode(data);
      if (this.head === null) this.head = this.tail = newNode;
      else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    dequeue() {
      if (this.head === null) return null;
      let data = this.head.data;
      this.head = this.head.next;
      if (this.head !== null) this.head.prev = null;
      else this.tail = null;
      return data;
    }
  }`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "How does a circular linked list differ from a traditional linked list?",
      options: ["It cannot contain null values", "Its last node points to the first node, forming a loop", "It has a fixed size", "All nodes are connected directly to the head"],
      answer: "Its last node points to the first node, forming a loop",
      knowledge: `A circular linked list is a variation of the linked list where the last node's 'next' pointer isn't set to null but instead points back to the first node. This forms a circular, looped structure allowing for continuous traversal through the list. It's particularly useful in applications requiring repetitive cycling through data, like round-robin scheduling.
  
  // Example of a circular linked list
  class CircularLinkedListNode {
    constructor(data) {
      this.data = data;
      this.next = null; // Initially, next is null
    }
  }
  
  function createCircularLinkedList(elements) {
    let head = new CircularLinkedListNode(elements[0]);
    let current = head;
    for (let i = 1; i < elements.length; i++) {
      current.next = new CircularLinkedListNode(elements[i]);
      current = current.next;
    }
    // Making the list circular by linking the last node to the head
    current.next = head;
    return head;
  }`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "What advantage does a sentinel node offer in a linked list?",
      options: ["Increases the speed of data access", "Simplifies the code for insertion and deletion", "Prevents data corruption", "Automatically sorts the data"],
      answer: "Simplifies the code for insertion and deletion",
      knowledge: `A sentinel node, or dummy head, in a linked list is a technique used to simplify boundary conditions, such as insertions at the head or deletions from an empty list. By ensuring the list always has at least one node (the sentinel), code for adding or removing elements can often ignore edge cases, leading to cleaner and more robust implementations.
  
  // Example of using a sentinel node
  class LinkedList {
    constructor() {
      this.sentinel = new ListNode(null); // Sentinel node with null data
    }
  
    insertFirst(data) {
      let newNode = new ListNode(data);
      newNode.next = this.sentinel.next;
      this.sentinel.next = newNode;
    }
  
    deleteFirst() {
      if (this.sentinel.next !== null) {
        this.sentinel.next = this.sentinel.next.next;
      }
    }
  }`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "Explain how to detect a cycle in a linked list.",
      options: ["By counting the number of nodes", "Using a hash table to store visited nodes", "By comparing every node with each other", "Using two pointers at different speeds"],
      answer: "Using two pointers at different speeds",
      knowledge: `Detecting a cycle in a linked list is a classic problem that can be efficiently solved using the two-pointer technique, also known as Floyd's Tortoise and Hare algorithm. This method uses two pointers moving at different speeds through the list; if there is a cycle, they will eventually meet. This approach is efficient and does not require additional memory for storing nodes.
  
  // Example of cycle detection
  function hasCycle(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next; // Moves one step
      fast = fast.next.next; // Moves two steps
      if (slow === fast) return true; // Cycle detected
    }
    return false; // No cycle
  }`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "Who developed the linked list and in which years was it developed?",
      options: ["Allen Newell, Cliff Shaw, and Herbert A. Simon in 1955–1956", "John von Neumann in 1945", "Alan Turing in 1936", "Ada Lovelace in the 1840s"],
      answer: "Allen Newell, Cliff Shaw, and Herbert A. Simon in 1955–1956",
      knowledge: `The linked list data structure was developed in 1955–1956 by Allen Newell, Cliff Shaw, and Herbert A. Simon at RAND Corporation and Carnegie Mellon University as part of the primary data structure for their Information Processing Language (IPL). IPL was one of the first computer languages designed for artificial intelligence research, highlighting the linked list's early role in managing flexible data storage and manipulation.`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "Why was the linked list data structure initially developed?",
      options: ["To enable more efficient use of memory in early computers", "As a solution for the rigid structure of arrays", "To facilitate the development of the Information Processing Language (IPL) for AI research", "To improve the speed of data retrieval in large databases"],
      answer: "To facilitate the development of the Information Processing Language (IPL) for AI research",
      knowledge: `Linked lists were initially developed to facilitate the creation of the Information Processing Language (IPL) for artificial intelligence research by Newell, Shaw, and Simon. The flexible and dynamic nature of linked lists made them ideal for IPL, which required a data structure that could easily adjust to varying data sizes and types, underscoring the linked list's pivotal role in early computing and AI studies.`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "What major computer science advancements have challenged the dominance of linked lists?",
      options: ["The introduction of high-level programming languages", "The invention of database management systems", "Developments in CPU architecture and memory caching techniques", "The creation of the internet and cloud computing technologies"],
      answer: "Developments in CPU architecture and memory caching techniques",
      knowledge: `Developments in CPU architecture and memory caching techniques have challenged the dominance of linked lists for certain applications. Modern processors are optimized for sequential memory access, benefiting from the contiguous memory layout of arrays due to cache efficiency. This has led to a preference for array-based data structures in performance-critical applications, despite linked lists' advantages in dynamic memory allocation and insertion/deletion operations.`
    },
    {
      category: "LinkedList",
      difficulty: 1,
      question: "In modern computer science education, why are linked lists still taught despite being considered less optimal for certain applications?",
      options: ["They are simpler to understand than arrays", "Linked lists underpin the implementation of many complex data structures", "Solely for their historical importance", "They are universally more efficient than other data structures"],
      answer: "Linked lists underpin the implementation of many complex data structures",
      knowledge: `Linked lists continue to be a staple in computer science education because they underpin the implementation of many complex data structures, including stacks, queues, and graphs. Understanding linked lists teaches fundamental concepts such as dynamic memory allocation, pointers, and the manipulation of data structures, which are crucial skills for computer science students. This foundational knowledge is essential for grasping more advanced topics in the field.`
    },
    {
        category: "LinkedList",
        difficulty: 2, // Level 2 difficulty question
        question: "Explain the difference between singly and doubly linked lists.",
        options: ["Node structure", "Memory usage", "Traversal direction", "All of the above"],
        answer: "All of the above",
        knowledge: `In singly linked lists, each node points to the next node in the sequence, while in doubly linked lists, each node has references to both the next and the previous nodes. This difference affects traversal direction—doubly linked lists can be traversed in both directions, while singly linked lists can only be traversed in one direction. Additionally, doubly linked lists generally use more memory than singly linked lists due to the extra pointer.`
      },
      // Add more questions with varying difficulties
      
  // Continuing from the previously defined quizQuestions array

// Adding Array category questions
{
    category: "Array",
    difficulty: 1,
    question: "What is the time complexity of accessing an element by index in an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
    knowledge: `Accessing an element by index in an array is a constant time operation, denoted as O(1). This efficiency comes from the fact that arrays are stored in contiguous memory locations, which allows direct access to any element if its index is known. This contrasts with data structures like linked lists, where accessing an element by value may require traversing the list from the beginning, leading to O(n) time complexity.`
  },
  {
    category: "Array",
    difficulty: 1,
    question: "Why might arrays be preferred over linked lists for data that is frequently accessed by index?",
    options: ["Dynamic resizing", "Efficient memory usage for sparse data", "Constant time access to elements", "Better cache locality and performance"],
    answer: "Better cache locality and performance",
    knowledge: `Arrays are often preferred for data that is frequently accessed by index due to their better cache locality and performance. Since arrays store elements in contiguous memory locations, this structure is more likely to benefit from CPU caching mechanisms, making data access faster. In contrast, linked lists have elements scattered throughout memory, leading to potentially more cache misses and slower access times for sequential traversal or access by value.`
  },
  {
    category: "Array",
    difficulty: 1,
    question: "How do dynamic arrays (like vectors in C++ or ArrayLists in Java) handle resizing when adding elements beyond their initial capacity?",
    options: ["They automatically discard the oldest elements", "They stay fixed in size and throw an error", "They allocate a new array with increased size and copy the elements over", "They link to a new array for additional elements"],
    answer: "They allocate a new array with increased size and copy the elements over",
    knowledge: `Dynamic arrays, such as vectors in C++ or ArrayLists in Java, handle resizing by allocating a new array with an increased size and copying the elements over from the old array. This process allows for flexible array sizes while maintaining the benefit of contiguous memory storage. However, it incurs a cost in terms of performance during the resizing operation, typically making it an O(n) operation, where n is the number of elements to be copied. This operation is amortized over several insertions, aiming to minimize the frequency of resizing and maintaining an efficient average insertion time.`
  },
  {
    category: "Array",
    difficulty: 1,
    question: "What advantage do arrays offer over linked lists in terms of memory usage?",
    options: ["Arrays require more memory for storage", "Arrays can store elements without additional overhead for pointers", "Linked lists inherently use less memory", "Arrays and linked lists use the same amount of memory"],
    answer: "Arrays can store elements without additional overhead for pointers",
    knowledge: `Arrays offer the advantage of storing elements without additional overhead for pointers, making them more memory-efficient for storing a collection of elements when compared to linked lists. In a linked list, each element (node) must also store one or more pointers to other nodes, which increases the memory required per element. This efficiency is particularly notable when storing simple data types like integers or floats, where the overhead of pointers in a linked list can significantly increase the total memory usage.`
  },
  
  // You can continue adding more questions following the same format.
  
  ];
//   function getQuestionsByCategory(questions, category) {
//     return questions.filter(question => question.category === category);
//   }
  
//   // Example usage:
//   const linkedListQuestions = getQuestionsByCategory(quizQuestions, "LinkedList");
//   const arrayQuestions = getQuestionsByCategory(quizQuestions, "Array");

  export default quizQuestions;