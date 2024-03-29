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

  delete(value) {
    this.root = this.#deleteNodeHelper(this.root, value);
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

  levelorder() {
    let result = [];
    let queue = [];
    if (this.root != null) {
      queue.push(this.root);
      while (queue.length > 0) {
        let current = queue.shift();
        result.push(current.value);
        if (current.left != null) {
          queue.push(current.left);
        }
        if (current.right != null) {
          queue.push(current.right);
        }
      }
    }
    else return null;
    return result;
  }

  inorder(current = this.root, result = []){
    if(this.root == null) return null;
    current.left && this.inorder(current.left, result)
    result.push(current.value)
    current.right && this.inorder(current.right, result)
    return result
  }

  postorder(current = this.root, result = []){
    if(this.root == null) return null;
    current.left && this.postorder(current.left, result)
    current.right && this.postorder(current.right, result)
    result.push(current.value)
    return result
  }

  preorder(current = this.root, result = []){
    if(this.root == null) return null;
    result.push(current.value)
    current.left && this.preorder(current.left, result)
    current.right && this.preorder(current.right, result)
    return result
  }

  isBalanced(current = this.root) {
    return this.#minHeight() >= this.#maxHeight() - 1;
  }

  rebalance(){
    let arr = this.levelorder();
    arr.sort((a, b) => a - b);
    return this.root = this.buildTree(arr);
  }

  #minHeight(current = this.root) {
    if (current == null) return -1;
    let left = this.#minHeight(current.left);
    let right = this.#minHeight(current.right);
    if (left < right) return left + 1;
    else return right + 1;
  }

  #maxHeight(current = this.root) {
    if (current == null) return -1;
    let left = this.#maxHeight(current.left);
    let right = this.#maxHeight(current.right);
    if (left > right) return left + 1;
    else return right + 1;
  }

  #deleteNodeHelper(node, value) {
    if (node == null) {
      return null;
    }
    if (value == node.value) {
      // node has no children
      if (node.left == null && node.right == null) return null;
      // node has no left child
      if (node.left == null) return node.right;
      // node has no right child
      if (node.right == null) return node.left;

      // node has two children
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      node.value = tempNode.value;
      node.right = this.#deleteNodeHelper(node.right, tempNode.value);
      return node;
    } else if (value < node.value) {
      node.left = this.#deleteNodeHelper(node.left, value);
      return node;
    } else {
      node.right = this.#deleteNodeHelper(node.right, value);
      return node;
    }
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
bstree.rebalance();
console.log(prettyPrint(bstree.root));