// // const my_name: string = "A.goutham";
// // const arr =[1,2,3];
// // const arr2 = [...arr,5,4,7];

// // function add(x:number,y:number){
// //     return x+y
// // }

// // add(1,2);
// // // add(a,a)

// type user = {
//     age: number;
//     username: string;
//     isMarried: boolean;
//     salary: number;
//     legs ?: true
// }

// const person1: user={
//        age:21,
//        username:"goutham",
//        isMarried:false,
//        salary:87000
// }

// type Animal = {
//     noOflegs: number;
// }

type user = {
  id: number;
  name: string;
  age: number;
  salary?: number;
};

const userData: user[] = [
  { name: "goutham", age: 22, salary: 70000, id: 414 },
  { name: "guddu", age: 24, salary: 150000, id: 423 },
  { name: "naveen", age: 20, salary: 45000, id: 132 },
  { name: "santhosh", age: 28, salary: 60000, id: 254 },
];

function Sort(userData: user[], catagory) {
  let i: number, key, j: number;
  for (i = 1; i < userData.length; i++) {
    key = userData[i];
    j = i - 1;

    while (j >= 0 && userData[j].id > key.id) {
      userData[j + 1] = userData[j];
      j = j - 1;
    }
    userData[j + 1] = key;
  }
  return userData;
}

let newData = Sort(userData, "id");
console.log(newData);
