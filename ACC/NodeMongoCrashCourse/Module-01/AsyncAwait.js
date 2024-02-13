const myPromise = new Promise((resolve, rejected) => {
  const user = {};
  if (!user) {
    rejected("Went Wrong");
  }

  setTimeout(() => {
    resolve("Successfully Resolved");
  }, 1000);
});

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getData() {
  const result = await myPromise;
  console.log(result);
}
getData();

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getData1() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
}
getData1();
