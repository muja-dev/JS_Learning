// let a=[1,2,3,4,5]
// //-------------------forof loop in js------------------------------
// for (const element of a) {
//     //console.log(element); 
// }
// //----------------forof on string------------------------------
// const name="Mujahid Sayyad"
// for (const character of name) {
//    // console.log(`character in name -->${character}`);    
// }

// //-------------------map in JS------------------------
// const map=new Map();
// map.set(1,"India")
// map.set(2,"USA")
// map.set(3,"UAE")

// //console.log(map);
// for (const [key,value] of map) {//array destructuring
//     // console.log(`${key} -> ${value}`);   
// }

// //-------------for in loop for object-------------------

// const myobj={
//     js:"JavaScript",
//     cpp:"C++",
//     py:"Pythom",
//     java:"Java"
// }

// for (const key in myobj) {
//   // console.log(`${key} shortcut for ${myobj[key]}`);
// }

// //------------------for in on array---------------
// // const arr=["java","Python","C++","JS"];
// // for (const key in arr) {
// //   // console.log(arr[key]);
// // }

// for (const key in map) {
//     // console.log(key);
// }

// //=======================for Each===================================

// // const arr=["java","Python","C++","JS"];
// // arr.forEach( function (val){
// //     console.log(val);
    
// // } )

// // arr.forEach((item)=>
// // {
// //     console.log(item);
    
// // })
// // function primtme(item)
// // {
// //     console.log(item);
// // }
// // arr.forEach(primtme)

// // arr.forEach((item,index,arr)=>
// // {
// //     console.log(item,index,arr);
    
// // })

// // const obj=[
// //     {
// //         languagename:"Java",
// //         filename:"Java"
// //     },
// //     {
// //         languagename:"Python",
// //         filename:"py"
// //     },
// //     {
// //         languagename:"CPP",
// //         filename:"c++"
// //     }
// // ]
// // obj.forEach((item)=>{
//     // console.log(item);
//     // console.log(item.filename);
//     //console.log(item.languagename);
// // })
// //====================== filter =============================================
// const arr=[1,2,3,4,5,6,7,8,9,10]
 
// // let result=arr.filter((item)=> item>4)
// // console.log(result);
// // let result=arr.filter((item)=>{
// //     return item>4
// // }
// // )
// // console.log(result);

// let obj=[{
//     titel:"Book one",
//     genre:"History",
//     publish:1998
//     },
//     {
//         titel:"Book two",
//     genre:"Fiction",
//     publish:2000
//     },
//     {
//         titel:"Book three",
//     genre:"History",
//     publish:2004
//     },
//     {
//         titel:"Book four",
//     genre:"Sci-fiction",
//     publish:1990
//     },
//     {
//         titel:"Book five",
//     genre:"Fiction",
//     publish:2010
//     }
// ]

// // let result=obj.filter((item)=>item.genre==="History" && item.publish>2000)
// // console.log(result);

// //=========================== map ============================================
// // let result=arr.map((item)=>item+10)
// // console.log(result);
// // let result=obj.map((item)=>item.genre==="Sci-fiction")
// // console.log(result);

//============================ reduce ============================================
// let arr=[1,2,3,4]
// // let result=arr.reduce((acc,val)=>acc+val,0)
// // console.log(result);
// let result=arr.map((item)=> item*10).filter((item)=>item>20).reduce((acc,val)=>acc+val,0)
// console.log(result);



