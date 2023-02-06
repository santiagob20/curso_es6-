const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Assync"), 2000)
      : reject(new Error("Errrooor!"));
  });
};

const anotherFn =  async () => {
   const something = await fnAsync();
   console.log(something);
   console.log('Helloww!');
}

console.log('Before!!');
anotherFn();
console.log('Afterrr');