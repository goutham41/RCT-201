
// type users = {
//   id: number;
//   name: string;
//   age: number;
//   salary?: number;
// };

// const data: users[] = [
//   { name: "goutham", age: 22, salary: 70000, id: 414 },
//   { name: "guddu", age: 24, salary: 150000, id: 423 },
//   { name: "naveen", age: 20, salary: 45000, id: 132 },
//   { name: "santhosh", age: 28, salary: 60000, id: 254 },
// ];

type User = {
  id: number;
  name: string;
  age: number;
  salary: number;
};

let user1: User = {
  id: 1,
  name: "Huzaifa",
  age: 20,
  salary: 500000,
};

let user2: User = {
  id: 3,
  name: "Amit",
  age: 22,
  salary: 400000,
};

let user3: User = {
  id: 2,
  name: "Nikhil",
  age: 25,
  salary: 550000,
};

let user4: User = {
  id: 5,
  name: "Lokendra",
  age: 27,
  salary: 450000,
};

let user5: User = {
  id: 4,
  name: "Shashi",
  age: 30,
  salary: 600000,
};

let user6: User = {
  id: 7,
  name: "Nikita",
  age: 24,
  salary: 750000,
};

let arrOfUsers: object[] = [user1, user2, user3, user4, user5, user6];

const swap = (arr: object[], i: number, j: number): void => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (
  arr: object[],
  left: number,
  right: number,
  key: string,
): number => {
  let randomIdx = Math.floor(Math.random() * (right - left)) + left;
  swap(arr, left, randomIdx);
  let pivot = arr[left][key];
  let i = left;
  let j = right;
  while (i < j) {
    while (arr[i][key] <= pivot && i < right) {
      i++;
    }
    while (arr[j][key] > pivot && j > left) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, left, j);
  return j;
};

const quickSort = (
  arr: object[],
  left: number,
  right: number,
  key: string,
): void => {
  if (left >= right) {
    return;
  }
  let index = partition(arr, left, right, key);
  quickSort(arr, left, index - 1, key);
  quickSort(arr, index + 1, right, key);
};

const sort = (arr: object[], key: string): object[] => {
  quickSort(arr, 0, arr.length - 1, key);
  return arr;
};

let sortedArrOfUsers: object[] = sort(arrOfUsers, "salary");

console.log(sortedArrOfUsers);