
// promise is an object and represents an asynchronous operation is resolved or not.
// it has 3 stages.
// 1. pending
// 2. resolved
// 3. rejected


function success(some) {
    console.log(some)
  }
  
  function failed(some) {
    console.log(some)
  }
  

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {success(value)},
    function(error) {failed(error)}
  );