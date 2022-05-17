
type user = {
  id: number;
  name: string;
  age: number;
  salary?: number;
};

const Users: user[] = [
  { name: "goutham", age: 22, salary: 70000, id: 414 },
  { name: "guddu", age: 24, salary: 150000, id: 423 },
  { name: "naveen", age: 20, salary: 45000, id: 132 },
  { name: "santhosh", age: 28, salary: 60000, id: 254 },
];

const partition = <T>(arr: T[], key: string, start: number, end: number) => {
  const pivotValue = arr[end][key];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i][key] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

//Custom Sort
const sort = <T>(
  arr: T[],
  key: keyof user ,
  start: number,
  end: number,
) => {
  if (start >= end) {
    return;
  }

  let index = partition(arr, key, start, end);

  
  sort(arr, key, start, index - 1);
  sort(arr, key, index + 1, end);
};

sort<user>(Users, "salary", 0, Users.length - 1);
