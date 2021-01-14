class Node {
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}

const node = new Node("Laila");
const node2 = new Node("Mohammad", node);
const node3 = new Node("Hasan", node);

console.log(node3.data);
console.log(node3.link.data);
console.log(node3.link.link);
