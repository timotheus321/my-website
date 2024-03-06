// src/components/Graph.js

class GraphNode {
    constructor(questionId) {
      this.questionId = questionId;
      this.edges = new Map(); // Key: answer choice, Value: next node (GraphNode)
    }
  
    addEdge(answerChoice, nextNode) {
      this.edges.set(answerChoice, nextNode);
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = new Map(); // Key: question ID, Value: node (GraphNode)
    }
  
    addNode(questionId) {
      const node = new GraphNode(questionId);
      this.nodes.set(questionId, node);
      return node;
    }
  
    findNode(questionId) {
      return this.nodes.get(questionId);
    }
  }
  
  export { Graph, GraphNode };
  