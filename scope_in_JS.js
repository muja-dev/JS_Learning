//-------------scope of let,var and const--------------------------

// let a=20
// const b=30
// var c=40

// console.log(a);
// console.log(b);
// console.log(c);



// {
//     let a=20
//     const b=30
//     var c=40
// }
// console.log(a);
// console.log(b);
// console.log(c);

//---------------global scope-------------------------
// let a=300
// {
//     let a=20
//     const b=30
//     var c=40
// }
//  console.log(a);
// console.log(b);
//console.log(c);


//----------------scope in if else-----------------------
// let a=400
// if(true)
// {
//     let a=30;
// }

// console.log(a);

//----------------scope in function-----------------------------

// function add(num)
// {
   
//     function addtwo(num1)
//     {
//         console.log(num+num1);
//     }
//     // console.log(num+num1);
//     addtwo(20);
// }
// add(10);

//---------------------------scope with function decleration------------------
// console.log(add(5));

// function add(value){
//     return value+1;
// }
//it is not allowed because the function hold within variable
// console.log(add(5));

// const result=add(value)
// {
//     return value+2
// }
