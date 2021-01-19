// const factorial = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// factorial(5);

class TreeNode {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }

  insert(data) {
    if (data <= this.data) {
      if (this.left === null) {
        this.left = new TreeNode(data);
      } else {
        this.left.insert(data);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  inorderTraversal(root) {
    let res = [];
    if (root) {
      res = [...res, ...this.inorderTraversal(root.left)];
      res.push(root.data);
      res = [...res, ...this.inorderTraversal(root.right)];
    }
    return res;
  }

  preorderTraversal(root) {
    console.log(root.data);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  postorderTraversal(root) {
    let res = [];
    if (root) {
      res = [...res, ...this.inorderTraversal(root.left)];
      res = [...res, ...this.inorderTraversal(root.right)];
      res.push(root.data);
    }
    return res;
  }
}
