function Node (value) {
	this.data = value;
	this.left = null;
	this.right = null;
}

function BST () {
	this._root = null
}

/*
Step 1: while (current)
Step 2: if else  current & data 
Step 3: inside if validate for null
*/

BST.prototype.insert = function(data) {
	var node = new Node(data);

	if (this._root === null){
		this._root = node;
	}

	var current = this._root;
	//step 1
	while (current) {
		//step 2
		if(data < current.data) {
			//step 3 left subtree
			if (current.left === null) {
				current.left = data;
				return;
			}
			current = current.left
		} else if (data > current.data){
			//right subtree
			if (current.right === null) {
				current.right = data;
				return;
			}
			current = current.right
		}else {
			return // duplicates
		}
	}
}

BST.prototype.contains = function (data) {

	var current = this._root;
	//Step 1
	while(current) {
		//step2
		if (current.data === data) {
			return true
		}
		//step 3
		if (data < current.data) {
			current = current.left
		} else { //step 4
			current = current.right
		}
	}
	return false
}

BST.prototype.preorder = function() {
	let output = [];
	function traversePreorder(node) {
		if(node === null) {
			return ;
		}
		output.push(node.data);
		traversePreorder(node.left);
		traversePreorder(node.right);
	}
	traversePreorder(this._root);
}

BST.prototype.inorder = function() {
	 // left
	 //data
	 //right
}

BST.prototype.postorder = function() {
	 // left
	 //right
	 //data
}
