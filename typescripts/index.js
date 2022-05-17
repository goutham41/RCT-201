var Users = [
    { name: "goutham", age: 22, salary: 70000, id: 414 },
    { name: "guddu", age: 24, salary: 150000, id: 423 },
    { name: "naveen", age: 20, salary: 45000, id: 132 },
    { name: "santhosh", age: 28, salary: 60000, id: 254 },
];
var partition = function (arr, key, start, end) {
    var a, b;
    var pivotValue = arr[end][key];
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i][key] < pivotValue) {
            // Swapping elements
            a = [arr[pivotIndex], arr[i]], arr[i] = a[0], arr[pivotIndex] = a[1];
            // Moving to next element
            pivotIndex++;
        }
    }
    // Putting the pivot value in the middle
    b = [arr[end], arr[pivotIndex]], arr[pivotIndex] = b[0], arr[end] = b[1];
    
    return pivotIndex;
};
//Custom Sort
var sort = function (arr, key, start, end) {
    if (start >= end) {
        console.log(arr);
    }
    var index = partition(arr, key, start, end);
    sort(arr, key, start, index - 1);
    sort(arr, key, index + 1, end);
};
sort(Users, "salary", 0, Users.length - 1);
// console.log(sort(Users, "salary", 0, Users.length - 1))