// // let mydate=new Date();
// // console.log(mydate.toLocaleString());

// // let newDate=new Date("2025-01-23");
// // console.log(newDate.toLocaleString());

// let timestamp = Date.now();
// console.log(timestamp/1000);
// console.log(timestamp.toFixed(5))

let mydate=new Date();
// console.log(mydate.getTime());
mydate.toLocaleString('default',{
    weekday:"long"
})

console.log(mydate);

