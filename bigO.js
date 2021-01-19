const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 12, 18];

// O(a) + O(b) -> O(a + b)
function test() {
  // O(a)
  // a = arr.length
  for (let element of arr) {
    console.log(element);
  }

  // O(b)
  // b = arr2.length
  for (let element of arr2) {
    console.log(element);
  }
}

// O(n) + O(n) -> O(2n) -> O(n)
function test2() {
  // O(n)
  for (let element of arr) {
    console.log(element);
  }

  // O(n)
  for (let element of arr) {
    console.log(element);
  }
}

// O(a + b) + O(n)
test(); // O(a + b)
test2(); // O(n)

// O(n^2)
function test3() {
  for (let x of arr) {
    for (let y of arr) {
      console.log(x, y);
    }
  }
}

// O(n^3)
function test4() {
  for (let x of arr) {
    for (let y of arr) {
      for (let z of arr) {
        console.log(x, y, z);
      }
    }
  }
}

// O(a*b)
function test5() {
  for (let x of arr) {
    for (let y of arr2) {
      console.log(x, y);
    }
  }
}

// O(n^3) + O(n^2) -> O(n^3)
test3(); // O(n^2)
test4(); // O(n^3)

for (let i = 0; i < 5; i++) {}
