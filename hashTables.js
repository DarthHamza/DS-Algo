class HashTable {
  constructor(arraySize) {
    this.arraySize = arraySize;
    this.array = new Array(this.arraySize).fill(null);
  }

  hash = (key, collisionCount = 0) => {
    const encoded = new TextEncoder("utf-8").encode(key);
    const hashCode = encoded.reduce((a, b) => {
      return a + b;
    }, 0);

    return hashCode + collisionCount;
  };

  compress = (hashCode) => {
    return hashCode % this.arraySize;
  };

  insert = (key, value) => {
    let collisionCount = 0;
    while (true) {
      const hashCode = this.hash(key, collisionCount);
      const index = this.compress(hashCode);

      let currentValue = this.array[index];
      if (!currentValue || currentValue[0] === key) {
        this.array[index] = [key, value];
        break;
      } else {
        collisionCount++;
      }
    }
  };

  lookup = (key) => {
    let collisionCount = 0;
    while (true) {
      const hashCode = this.hash(key, collisionCount);
      const index = this.compress(hashCode);
      let currentValue = this.array[index];

      if (!currentValue) return null;

      if (currentValue[0] === key) {
        return currentValue[1];
      }

      collisionCount++;
    }
  };
}

const hashTable = new HashTable(30);
hashTable.insert("Obi-Wan Kenobi", "Jedi Master");
hashTable.insert("Anakin Skywalker", "Jedi Knight");
hashTable.insert("Ahsoka Tano", "Padawan");

console.log(hashTable.lookup("Obi-Wan Kenobi"));
console.log(hashTable.lookup("Anakin Skywalker"));
console.log(hashTable.lookup("Ahsoka Tano"));
