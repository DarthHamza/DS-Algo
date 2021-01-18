class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild = (node) => {
    this.children.push(node);
  };

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.data);
      nodes = [...nodes, ...current.children];
    }
  };
}

const root = new TreeNode("Darth Vader");
const child1 = new TreeNode("Luke Skywalker");
const child2 = new TreeNode("Leia Organa");
const child3 = new TreeNode("Kylo Ren");

root.addChild(child1);
root.addChild(child2);
child2.addChild(child3);
root.removeChild(child2);

root.traverse();
