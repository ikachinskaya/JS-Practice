console.log("Задание 1");
const getMinNumber = function (array) {
  let minNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
};

const array = [4, -2, 5, 19, -130, 0, 10];
console.log(getMinNumber(array));
console.log("============");

console.log("Задание 2");
const getMaxNumber = function (array) {
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
};

console.log(getMaxNumber(array));
console.log("============");

console.log("Задание 3");
const getAverageElements = function (array) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    count++;
  }
  return result / count;
};

const arr = [12, 15, 20, 25, 59, 79];
console.log(getAverageElements(arr));
console.log("============");

console.log("Задание 4");
const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandom(1, 100));
console.log("============");

console.log("Задание 5");
function getArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = getRandom(1, 100);
  }
  return arr;
}
console.log(getArray(10));
console.log("============");

console.log("concat");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrConcat = arr1.concat(arr2);
console.log(arrConcat);

console.log("reverse");
const arr3 = [1, 2, 3];
const arrReverse = arr3.reverse();
console.log(arrReverse);

console.log("push, unshift");
const arr4 = [1, 2, 3];
const arr5 = [1, 2, 3];
arr4.push(4, 5, 6);
arr5.unshift(4, 5, 6);
console.log(arr4);
console.log(arr5);

console.log("shift,pop");
const arr6 = ["js", "css", "jq"];
console.log(arr6.shift());
console.log(arr6.pop());

console.log("slice");
const arr7 = [1, 2, 3, 4, 5];
const arr8 = arr7.slice(0, 3);
const arr9 = arr7.slice(3, 6);
console.log(arr8);
console.log(arr9);

console.log("splice");
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);

const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.splice(1, 3);
console.log(arr12);

const arr13 = [1, 2, 3, 4, 5];
arr13.splice(3, 0, "a", "b", "c");
console.log(arr13);

const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 4, "a", "b", 2, 3, 4, "c", 5, "e");
console.log(arr14);

console.log("sort");
const arr15 = [3, 4, 1, 2, 7];
arr15.sort();
console.log(arr15);

console.log("Object.keys");
const obj = {
  js: "test",
  jq: "hello",
  css: "world",
};
const arrKeys = Object.keys(obj);
console.log(arrKeys);
console.log("============");

console.log("hasElem");
const hasElem = function (array, str) {
  return array.includes(str);
};
const array1 = [1, 5, 9, "string", 4, 9, 2];
console.log(hasElem(array1, "string"));
console.log(hasElem(array1, "array"));

console.log("findNumbersOfArray");
const findNumbersOfArray = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i] === value;
  }
};
const arr20 = [1, 59, 2, 8, 52, 9, 21, 78, 1, 3, 4, 56, 6, 7, 8, 9];
console.log(findNumbersOfArray(arr20, 1));
console.log(findNumbersOfArray(arr20, 1111));

console.log("findTwoNumbersOfArray");
const findTwoNumbersOfArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};
const arr30 = [1, 2, 464, 123, 45, 5, 9, 9];
const arr40 = [1, 2, 464, 123, 45, 5, 9];
console.log(findTwoNumbersOfArray(arr30));
console.log(findTwoNumbersOfArray(arr40));
