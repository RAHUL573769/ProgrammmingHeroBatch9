// We use Promise to prevent call back hell

// Promise---->resolved---->Rejected
const userData = [];
const userId = [1, 2, 3, 4, 5];

for (let i = 0; i < userId.length; i++) {
  const userId1 = userId[i];
  myPromise.then((user) => {
    console.log(user);
  });
  console.log(userId1);
}
const myPromise = new Promise((resolve, rejected) => {
  const user = {};
  if (!user) {
    rejected("Went Wrong");
  }

  setTimeout(() => {
    resolve("Successfully Resolved");
  }, 1000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
