// // const my_name: string = "A.goutham";
// // const arr =[1,2,3];
// // const arr2 = [...arr,5,4,7];
var userData = [
    { name: "goutham", age: 22, salary: 70000, id: 414 },
    { name: "guddu", age: 24, salary: 150000, id: 423 },
    { name: "naveen", age: 20, salary: 45000, id: 132 },
    { name: "santhosh", age: 28, salary: 60000, id: 254 },
];
function Sort(userData, catagory) {
    var i, key, j;
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
var newData = Sort(userData, "id");
console.log(newData);
