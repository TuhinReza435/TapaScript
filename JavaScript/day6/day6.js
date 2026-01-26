// let printline = function(val1,val2,val3) {
//      return(`This is ${val1+val2+val3} ${val2*val2*val3} ${val3-val2-val3} `);
// }
// let val1=(printline(1,2,3));
// let val2=(printline(4,5,6));
// let val3=(printline(7,8,9));
// let val4=(printline(10,11,12));
// let val5=(printline(13,14,15));

// console.log(val1,val2,val3,val4,val5);


// Rest parameter 

// let calculation = function(x,y, ...rest){
//     console.log(x,y);
//     for(let i=0;i<rest.length;i++)console.log(rest[i]);
// }
// calculation(1,2,3,4,5,6,7,8);

// function outer() // nested function 
// {
//     console.log('Outer');
//     return function inner(){
//         console.log('inner'); 
//     }
    
// } 

// let ret=outer();
// console.log(ret());

// function foo(func){// CallBack function
//     console.log("foo");
//     func();
// }
// foo(function(){
//     console.log('buz');
// })

// const message ='Hello ';
// let greeting = function(name){
//     return message+name;
// }
// let nm=greeting('Tuhin');
// console.log(nm);


// // Higher order function

// function getCamera(camera)
// {
//     camera();
// }
// getCamera(function(){
//     console.log('sony camera');
// })


// function returnFunc() {
//     return function(){
//         console.log("hello Tuhin");
//     }
// }
// const func = returnFunc();
// console.log(func());



// Arrow Function 

// let greetMe=(event)=>{
//     console.log(event);
// }
// greetMe('message');


// //Imidiately involked function
// (function(nm)
// {
//     console.log(nm);
// })('This is Tuhin');


// // recursion function
// function foo(){
//     foo();
// }
// function fetchWater(cnt){
//     console.log("Fetching Water ",cnt);
//     if(cnt===0)return;
//     fetchWater(cnt-1);
// }
// fetchWater(5);

let temperature = 50;
function farhenhite(temp){
    let temparature = (9/5)*temp+32;
    console.log(temparature);
    
}
farhenhite(temperature);


//Work 2

// let max = function(a,b){
//    if(a>b)return a;
//    return b;
// }
// let maxvalue=(max(10,20));
// console.log(maxvalue);



//Palindrimic string 

let string ="abbaa";
const isPalindrom = function(str){
    console.log("sdhfsd");
      let l=0;
      let r=str.length-1;
      let flag =true
      while(l<=( (str.length+1)/2)){
          if(str[l]===str[r]){
            l++;
            r--;
          }else{
            flag = false
            return flag;
          }
      }
      return flag
}
console.log(isPalindrom(string));


let number = 10;
let factorial = function(n)
{
    for(i=1;i<=n;i++)console.log(i);
}
factorial(number);