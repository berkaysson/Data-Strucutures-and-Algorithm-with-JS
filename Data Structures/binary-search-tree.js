class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(arr) {
    const sortedArr = [
      ...new Set(
        arr.sort(function (a, b) {
          return a - b;
        })
      ),
    ];
    this.root = this.buildTree(sortedArr);
  }

  buildTree(sortedArr) {
    if (sortedArr.length === 0) return null;
    const mid = Math.floor(sortedArr.length / 2);
    const node = new Node(sortedArr[mid]);
    node.left = this.buildTree(sortedArr.slice(0, mid));
    node.right = this.buildTree(sortedArr.slice(mid + 1));
    return node;
  }

  insert(value, current = this.root) {
    if (current === null) {
      this.root = new Node(value);
      return;
    }
    if (current.value === value) return;
    if (value < current.value) {
      if (current.left === null) {
        current.left = new Node(value);
        return;
      }
      this.insert(value, current.left);
    } else if (value > current.value) {
      if (current.right === null) {
        current.right = new Node(value);
        return;
      }
      this.insert(value, current.right);
    }
  }

  delete(value, current = this.root, parent = null) {
    if (current == null) {
      return null;
    }
    if (value == current.value) {
      if (current.left == null && current.right == null) {  // has no child
        if(parent.value < value){  // deleting from parents child
          parent.right = null
          return
        }
        else{
          parent.left = null
          return
        }
      }
      if(current.left == null) {  //only has left or right child
        current.value = current.right.value
        current.right = null
        return
      }
      if(current.right == null) { //only has left or right child
        current.value = current.left.value
        current.left = null
        return
      }

      // if node has two children, we need to replace node with first right then leftist node 

      let tempNode = current.right // first right
      while(tempNode.left != null){  // then last left
        tempNode = tempNode.left
      }
      current.value = tempNode.value
      this.delete(tempNode.value, current.right)  // returning right causes error, current and tempNode same, there will be two same node, specify which one will be deleted, need to start from right child bu it causes error
      return
    }
    if(value < current.value){
      parent = current
      this.delete(value, current.left, current)
    } 
    else if (value > current.value) {
      parent = current
      this.delete(value, current.right, current)
    } 
  }

  find(value) {
    let current = this.root;
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current === null) return null;
    return current;
  }
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

let bstree = new BST([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
bstree.insert(444)
bstree.insert(300)
bstree.insert(10)
console.log(prettyPrint(bstree.root));
bstree.delete(324)
console.log(prettyPrint(bstree.root));
