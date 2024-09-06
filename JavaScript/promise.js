
// promise is an object and represents an asynchronous operation is resolved or not.
// it has 3 stages.
// 1. pending
// 2. resolved
// 3. rejected


function myResolved(some) {
    console.log(some)
  }
  
  function myRejected(some) {
    console.log(some)
  }
  

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myResolved(value)},
    function(error) {myRejected(error)}
  );