for(let i=0;i<10;i++){
    console.log(`tapa script ${i}`);
}
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
let sum=0;
for(let i=1;i<=500;i+=2){
    sum+=i;
}
console.log(sum);


let number = 6789;

let reverse='';
while(number>0){
     let num=number%10;
     number=Math.floor(number/10);
     reverse+=num;
}
console.log(reverse);