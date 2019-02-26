//creates a class to structure each individual node
class Node {
    constructor(data) {
      this.val = data;
      this.next = null
      this.length = this.length++
    }
}
//creates a class to structure each SLL
//num refers to a position in the list not a value
class LinkedList {
    //on construction set head and length
    constructor() {
      this.head   = null;
      this.length = 0;
    }
    //method to add nodes
    add(data) {
        const nodeToAdd = new Node(data);
        let nodeToCheck = this.head;
        if(!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;
            return nodeToAdd;
        }
        while(nodeToCheck.next) {
            nodeToCheck = nodeToCheck.next;
        }
        nodeToCheck.next.val = data;
        nodeToCheck.next.next = null
        this.length++;
        return nodeToAdd;
    }
    //method to retrieve specific node
    get(num) {
        let nodeToCheck = this.head;
        let count = 0;
      
        if(num > this.length) return "Doesn't Exist!"
      
        while(count < num) {
            nodeToCheck = nodeToCheck.next;
            count++;
        }
      
        return nodeToCheck;
    }
    //method to remove node
    remove(num) {
        let nodeToCheck = this.head,
            count       = 0,
            prevNode    = null;
      
        if(num > length) return "Doesn't Exist!" 
      
        if(num === 0) {
            this.head = nodeToCheck.next;
            this.length--;
            
            return this.head;
        }
        
        while(count < num) {
            prevNode = nodeToCheck;
            nodeToCheck = nodeToCheck.next;
            count++;
        }
        
        prevNode.next = nodeToCheck.next;
        nodeToCheck = null;
        this.length--;
        
        return this.head;
    }  
}

module.exports = {
    Node,
    LinkedList
};