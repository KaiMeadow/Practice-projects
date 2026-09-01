// 1. How to create a Promise

const myPromise = new Promise(function(resolve, reject) {
  let success = true;

  if (success) {
    resolve("Everything went great!"); // Triggers success
  } else {
    reject("Something broke...");      // Triggers failure
  }
});


// 2. How to use a Promise

myPromise
  .then(function(result) {
    // Runs ONLY if resolve() was called
    console.log(result); // "Everything went great!"
  })
  .catch(function(error) {
    // Runs ONLY if reject() was called
    console.log(error);  // "Something broke..."
  })
  .finally(function() {
    // Runs ALWAYS, regardless of success or failure
    console.log("Cleanup: Task is completely finished.");
  });


// 3. Chaining Promises  


new Promise(function(resolve, reject) {
  setTimeout(() => resolve(10), 1000); // Wait 1 second, resolve with 10
})
  .then(function(num) {
    console.log("Step 1:", num); // 10
    return num * 2;              // Passes 20 to the next .then()
  })
  .then(function(num) {
    console.log("Step 2:", num); // 20
    return num * 2;              // Passes 40 to the next .then()
  })
  .then(function(num) {
    console.log("Step 3:", num); // 40
  });


// Promise.all (Doing 10 all at Once) 

const fetchUsers = fetch('/users.json');
const fetchArticles = fetch('/articles.json');

Promise.all([fetchUsers, fetchArticles] {
  .then(function(responses) {
    console.log("Both requests are finished!", responses);
  })
  .catch(function(error) {
    console.log("IF EVEN ONE requests fails, this catch error", error);
  })
});