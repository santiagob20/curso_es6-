async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
console.log(other.next().then(res => console.log(res.value)))
console.log(other.next().then(res => console.log(res.value)))
console.log(other.next().then(res => console.log(res.value)))
console.log('Hellow!')

async function arrayofNames(array) {
  for await (let value of array) {
    console.log(value)
  }
}

const names = arrayofNames(['Oscar', 'David', 'Ana', 'Santiago']);
console.log('After');