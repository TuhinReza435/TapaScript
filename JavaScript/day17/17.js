// const name = document.getElementById("heading");
// const infoElm=document.getElementsByClassName('info');
// // console.log(name.innerText);

// [...infoElm].forEach((ele)=>
//      console.log(ele.innerHTML)
// )

// const h1Ele=document.getElementsByTagName('h1');
// [...h1Ele].forEach(
//     (ele)=>console.log(ele.innerHTML)
// )

// let pare = document.querySelector('p.info');
// console.log(pare);
// let para = document.querySelectorAll('p.info');
// console.log("Starting Here");
// [...para].forEach(
//     ele=>(
//         console.log(ele.innerHTML)
//     )
// )

// function hilightText()
// {
//     console.log('hilightText');
//     let element = document.querySelectorAll('p.info');
//     [...element].forEach(
//         ele=>(
//             console.log(ele.style.backgroundColor='Yellow')
//         )
//     )
// }


function filterLIst(){
     let input = document.getElementById('searchInput').value.toUpperCase();
     let carList='';
     let CarEle=document.getElementsByTagName('li');
   //  console.log(CarEle);
     [...CarEle].forEach(
        element=>{
            let text =element.innerText.toUpperCase();
            console.log(text);
            if(text.includes(input)){
                element.style.display='block';
             
            }else{
               element.style.display='none';
            }
        }
                 
     )

}