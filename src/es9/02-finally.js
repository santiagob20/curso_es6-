const anotherFn = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("hey!! it works");
    } else {
      reject("Whooops!");
    }
  });
};

anotherFn()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log('Final msg'))
