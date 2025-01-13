
let s1=new String("Mujahid Sayyad");

let s2=s1.split(" ");
for (let index = 0; index < s2.length; index++) {
    let s4=s2[index];
    let s3=s4.split("")
let i=0;
let j=s3.length-1;
    while(i<j)
    {
     let temp=s3[i];
        s3[i]=s3[j];
        s3[j]=temp;
        i++;
        j--;
    }
    s2[index]=s3.join("");
}
console.log(s2.join(" "));



