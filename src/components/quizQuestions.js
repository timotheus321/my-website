// quizQuestions.js
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
    // More questions as needed
  ];
    
  export default quizQuestions;
  