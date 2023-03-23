// Build a Node class/factory . It should have an attribute for the data it
// stores ass well as its left and right children;

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Build a Tree class/factory which accepts an array when initialized. The Tree
// class should have a root attribute which uses the return value of buildTree
// which you'll write next.

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);                 // create new node
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    delete(data) {
        this._delete(data, this.root);
    }

    _delete(value, current = this.root) {
        if(current === null) {
            return current;
        }

        if(value < current.data) {
            current.left = this._delete(value, current.left);
        } else if(value > current.data) {
            current.right = this._delete(value, current.right);
        } else {
            if(!current.right && !current.left) {
                return null;
            } else if(!current.right && current.left) {
                return current.left;
            } else if(current.right && !current.left) {
                return current.right;
            }
        }
        return current;
    }

    find(value) {
        return this._find(value, this.root);
    }

    _find(value, currentNode) {
        if(currentNode === null) {
            return 'Value does not exist';
        } else {
            if(currentNode.data === value) {
                return currentNode;
            }
            if(value > currentNode.data) {
                return this._find(value, currentNode.right);
            } else if(value < currentNode.data) {
                return this._find(value, currentNode.left);
            }
        }
    }

    levelOrder(fn) {
        return this._levelOrder(fn, this.root);
    }
    _levelOrder(fn = null, currentNode) {
        let result = [];            // holds array of values in tree
        let temp = [];              // hold nodes and acts as queue
        if(currentNode === null) {
            return result;
        }

        temp.push(currentNode);

        while(temp.length != 0){
            currentNode = temp[0];
            result.push(currentNode.data);

            if(fn) {
                fn(currentNode.data);
            }

            if(currentNode.left) {
                temp.push(currentNode.left);
            }
            if(currentNode.right) {
                temp.push(currentNode.right);
            }
            temp.shift()
        }
        return result;
    }

    inOrder(fn) {
        return this._inOrder(fn, this.root);
    }

    _inOrder(fn, currentNode) {
        if(!currentNode) {
            return;
        };
        if(currentNode.left) {
            this._inOrder(fn, currentNode.left);
        }
        fn(currentNode.data);
        if(currentNode.right) {
            this._inOrder(fn, currentNode.right);
        }
    }

    postOrder(fn) {
        return this._postOrder(fn, this.root);
    }

    _postOrder(fn, currentNode) {
        if(!currentNode) {
            return;
        }
        if(currentNode.left) {
            this._postOrder(fn, currentNode.left);
        }
        if(currentNode.right) {
            this._postOrder(fn, currentNode.right);
        }
        fn(currentNode.data);
    }

    preOrder(fn) {
        return this._preOrder(fn, this.root);
    }

    _preOrder(fn, currentNode) {
        if(!currentNode) {
            return;
        }
        fn(currentNode.data);
        if(currentNode.left) {
            this._preOrder(fn, currentNode.left);
        }
        if(currentNode.right) {
            this._preOrder(fn, currentNode.right);
        }
    }

    height() {
        return this._height(this.root);
    }
    _height(root) {
        if(!root) {
            return -1;
        }
        let left = this._height(root.left);
        let right = this._height(root.right);

        if(left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    depth(value) {
        return this._depth(value, this.root);
    }
    _depth(value, root) {
        let count = 0;
        if(!root) {
            return;
        }
        while(root.data != value) {
            if(root.data > value) {
                root = root.left;
                count++;
            } else if(root.data < value) {
                root = root.right;
                count++;
            }
        }
        return count;
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }
    _isBalanced(root) {
        let left, right;
        
        if(!root) {
            return -1;
        };
        
        while(root){
            left = this.height(root.left)
            right = this.height(root.right);
            
            if(left > right) {
                left + 1;
            } else {
                right + 1;
            }
            break;
        }

        if(Math.abs(left - right) > 1) { 
            return false;
        } else {
            return true;
        }
    }

    balance() {
        this._balance(this.root);
    }
    _balance(current) {
        let array = [];
        let count = 0;
        let result = [];

        if(!current) return;

        array.push(current)
        
        while(array[count]){
            
            if(current.left && current.right){
                array.push(current.left)
                array.push(current.right)
            }else{
                if(current.left && !current.right) array.push(current.left)
                if(!current.left && current.right) array.push(current.right)
            }
            count++;
            current = array[count];
            

        }
       
        for(let i=0;i<array.length;i++){
            result.push(array[i].data)
        }
        
        let removeDupe = [...new Set(result)];

        let dupeSortArray = removeDupe.sort((a,b)=>{
            return a-b;
        })

        console.log(result)

        
        
       this.root = buildTree(dupeSortArray,0,result.length-1)
        
    }
}

let tree = new Tree();

/* ********************** Create and Insert Values ********************** */

console.log('\n1. Creating new tree and inserting values...\n');

tree.insert(34);
tree.insert(33);
tree.insert(45);
tree.insert(1);
tree.insert(588);
tree.insert(84);
tree.insert(233);
tree.insert(12);
tree.insert(46);
tree.insert(78);
tree.insert(79);
tree.insert(98);
tree.insert(93);
tree.insert(23);
tree.insert(80);
tree.insert(81);

prettyPrint(tree.root);

/* ********************** Delete Values ********************** */

console.log('\n2. Deleting values 588, 98, and 1...\n');

tree.delete(588);
tree.delete(98);
tree.delete(1);

prettyPrint(tree.root);

/* ********************** Searching for Values ********************** */

console.log('\n3. Searching for values 34, 33, and 56...\n');

console.log('Is 34 in the tree (true)\n', tree.find(34));
console.log('\nIs 33 in the tree (true): \n', tree.find(33));
console.log('\nIs 56 in the tree (false): \n', tree.find(56));
console.log();

prettyPrint(tree.root);

/* ********************** Level Order Traversal ********************** */

console.log('\n4. Level Order...\n');
console.log('...creating function that multiplies tree values by 2, prints the result, and passing to leveOrder...\n')

function times(val) {
    console.log(val * 2);
}

tree.levelOrder(times);

console.log('\n...printing array from levelOrder()...\n\n', tree.levelOrder());

/* ********************** In Order Traversal ********************** */

console.log('\n5. In Order...\n');

console.log('\n...printing values from inOrder()...\n');

function print(val) {
    console.log(val);
}

tree.inOrder(print);

/* ********************** Post Order Traversal ********************** */

console.log('\n6. Post Order...\n');

prettyPrint(tree.root);

console.log('\n...printing values from postOrder()...\n');

tree.postOrder(print);

/* ********************** Pre Order Traversal ********************** */

console.log('\n7. Pre Order...\n');

prettyPrint(tree.root);

console.log('\n...printing values from preOrder()...\n');

tree.preOrder(print);

/* ********************** Height Function ********************** */

console.log('\n8. Height of the tree...\n');

console.log(tree.height());

/* ********************** Depth Function ********************** */

console.log('\n9. Depth of the value 78...\n');
console.log(tree.depth(78));

/* ********************** isBalanced Function ********************** */

console.log('\n10. isBalanced Function...\n');
console.log('Tree is balanced: ', tree.isBalanced());

/* ********************** balance Function ********************** */

console.log('\n11. isBalanced Function...\n');
tree.balance();



function prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  function buildTree(array,startIndex,endIndex){

    if(startIndex>endIndex){
        return null;
    }
    
    let midIndex = Math.floor((startIndex+endIndex)/2);

    let node = new Node(array[midIndex])
    
    node.left = buildTree(array,startIndex,midIndex-1)
    node.right = buildTree(array,midIndex+1,endIndex)
    
    return node;
}