//-------------Simple Function---------------
// function add(a,b){
//     // console.log(a+b);
//     return a+b
// }

// let result=add(5,10)
// console.log(result);
 
//---------condition check----------------------------------
// function userLoggedIn(username){
//     if(username===undefined)
//     {
//         return `please enter user name`
//     }
//     return `${username} just logged in`
// }
// let result=userLoggedIn("mujahid");
// console.log(result);

//----------------condition with ! check ---------------------------
// function userLoggedIn(username)
// {
//     if(!username)
//     {
//         return `Please enter username`
//     }
//     return `${username} just logged in`
// }
// console.log(userLoggedIn("Mujahid"));

//------------function with default value-------------

// function userLoggedIn(username="sam")
// {
//     return `${username} just logged in`
// }

// console.log(userLoggedIn("Mujahid"));

//--------------function with spread operator------------------------

// function calculateCart(num1)
// {
//     return `price is ${num1}`
// }

// console.log(calculateCart(200,300,500))

// function calculateCart(...num1)
// {
//     return `price is ${num1}`
// }
// console.log(calculateCart(200,300,500));

//-------------function with object----------------

// let obj={
//     name:"Mujahid",
//     price:200
// }
//----------object reference as parameter---------------------------
// function userInfo(myobj)
// {
//     return `username is ${myobj.name} and price is ${myobj.price}`
// }
//-----------------object as parameter-----------------------
// console.log(userInfo(
//     {
//         name:"Sayyad",
//         price:400
//     }
// ));

//--------------function eith array------------------------
// let arr=[20,30,40]
// function arrayfun(arrexmp)
// {
//     return arrexmp
// }
//-----------array reference passing---------------------
// console.log(arrayfun(arr));
//-----------------direct array passing----------------------
// console.log(arrayfun([20,10,50]));





