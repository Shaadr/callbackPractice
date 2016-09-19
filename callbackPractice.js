/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  function first(names, cb)  {
    return cb(names[0]);
  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function last(arr, cb){
  return cb(arr[arr.length - 1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function multiply(num1, num2, cb) {
  return cb(num1 * num2);
}

  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

// in the following:
// the for loop can be taken out b/c .indexOf() is mini forloop.
// in that case, a return cb(false); must be added after the if statement

function contains(arr, str, cb){
  for(var i = 0; i < arr.length; i++) {
    if (arr.indexOf(str) !== -1){
      return cb(true);
    }
  }
  cb(false);
}

  //Code Here for contains

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


// function uniq(names, cb) {
//   var newArr = [];
//   for (var i = 0; i < names.length; i++) {
//     for (var j = 0; j < names.length; j++){
//       if (names[i] === names[j]) {
//       	//names.splice(i,1);
//        	newArr.push(names.splice(i, 1));
//         //console.log(names[i]);
//        // console.log(names[j]);
//         console.log(names);
//         console.log(newArr);
//         console.log("---")
//       }
//     }
//   }
//   return cb(newArr);
// }

    //Code Here for uniq

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


function each(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    var ret = cb(arr[i], i);
  }
  return ret;
}

    //Code Here for each

each(names, function(item, index){
  console.log('The item in the ' + index + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
