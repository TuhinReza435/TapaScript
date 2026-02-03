

//  let user ={
//     name:'Tuhin',
//     age:24
//  };
// user.isSenior=false;
//  console.log(user);
//  user.age=34;
//  const someKey = "name";
//  console.log(user[someKey]);




 //let car =prompt('Which is your fav Car ?');
//  let car="Any"
//  let favCar = {
//     [car]:5
//  }
//  console.log(favCar);


//  function Car(name,model){
//        this.name=name;
//        this.model=model;
//  }
//  const car1=new Car('BMW',1999);
//  const car2=new Car('Marcedis',2010);
//  const car3=new Car('Tesla',2015);
//  const car4=new Car('Byd',2020);


// console.log(`${car1.name}  ${car1.model}`);
// console.log(`${car2.name}  ${car2.model}`);
// console.log(`${car3.name}  ${car3.model}`);
// console.log(`${car4.name}  ${car4.model}`);


// let fruit ={name:'Mango'};
// const oneMore ={name:'Mango'};
// // fruit=oneMore;
// console.log(fruit.name===oneMore.name)
// console.log(fruit==oneMore);


// const target ={
//     p:1,
//     q:2
// }
// const source = {a:3,b:5};
// const returnObj=Object.assign(target,source);
// // console.log(returnObj);
// const obj ={name:'Tuhin Reza'}
// const obj2 = Object.assign({},obj)
// console.log(obj2);


// const obj3={
//     a:1,
//     b:{c:2}
// }
// const obj4=Object.assign({},obj3);

// const obj5=structuredClone(obj3);
// console.log(obj5);

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

const hr =departments.find(dept=>dept.name==="HR");
const engineer =departments.find(dept=>dept.name==="Engineering");
const Marketing =departments.find(dept=>dept.name==="Marketing");
const sales =departments.find(dept=>dept.name==="Sales");
let newArray=[];
for(let x of employees){
    if(x.departmentId==hr.id){
        newArray.push(`${x.name} ${hr.name}`)
    }
    if(x.departmentId==engineer.id){
        newArray.push(`${x.name} ${engineer.name}`)
    }
    if(x.departmentId==Marketing.id){
        newArray.push(`${x.name} ${Marketing.name}`)
    }
    if(x.departmentId==sales.id){
        newArray.push(`${x.name} ${sales.name}`)
    }
}
for(let x of newArray)console.log(x);

let salaries = employees.map(emp=>( (emp.salary*10/100) +emp.salary);
    

console.log(salaries)
