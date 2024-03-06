// src/components/Graph.js

class GraphNode {
    constructor(questionId) {
      this.questionId = questionId;
      this.edges = {}; // Object to hold edges: { 'correct': nextNodeId, 'incorrect': alternateNextNodeId }
    }
  
    addEdge(condition, nextNodeId) {
      this.edges[condition] = nextNodeId;
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = {}; // Object to hold graph nodes
    }
  
    addNode(questionId) {
      if (!this.nodes[questionId]) {
        this.nodes[questionId] = new GraphNode(questionId);
      }
      return this.nodes[questionId];
    }
  
    findNode(questionId) {
      return this.nodes[questionId];
    }
  }
  
  export { Graph, GraphNode };
  