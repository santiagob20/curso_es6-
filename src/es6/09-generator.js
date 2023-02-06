function* iterate(array) {
  for (let val of array) {
    yield val;
  }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Santiago']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

