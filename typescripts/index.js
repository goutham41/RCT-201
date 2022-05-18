// type users = {
//   id: number;
//   name: string;
//   age: number;
//   salary?: number;
// };
var user1 = {
    id: 1,
    name: "Huzaifa",
    age: 20,
    salary: 500000
};
var user2 = {
    id: 3,
    name: "Amit",
    age: 22,
    salary: 400000
};
var user3 = {
    id: 2,
    name: "Nikhil",
    age: 25,
    salary: 550000
};
var user4 = {
    id: 5,
    name: "Lokendra",
    age: 27,
    salary: 450000
};
var user5 = {
    id: 4,
    name: "Shashi",
    age: 30,
    salary: 600000
};
var user6 = {
    id: 7,
    name: "Nikita",
    age: 24,
    salary: 750000
};
var arrOfUsers = [user1, user2, user3, user4, user5, user6];
var swap = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var partition = function (arr, left, right, key) {
    var randomIdx = Math.floor(Math.random() * (right - left)) + left;
    swap(arr, left, randomIdx);
    var pivot = arr[left][key];
    var i = left;
    var j = right;
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
var quickSort = function (arr, left, right, key) {
    if (left >= right) {
        return;
    }
    var index = partition(arr, left, right, key);
    quickSort(arr, left, index - 1, key);
    quickSort(arr, index + 1, right, key);
};
var sort = function (arr, key) {
    quickSort(arr, 0, arr.length - 1, key);
    return arr;
};
var sortedArrOfUsers = sort(arrOfUsers, "salary");
console.log(sortedArrOfUsers);
