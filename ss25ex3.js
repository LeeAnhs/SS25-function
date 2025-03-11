let arr = [];
let input = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
for (let i = 0; i < input; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1)));
  arr.push(num);
}
function findEven(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return "dữ liệu không hợp lệ";
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  if (evenNumbers.length > 0) {
    return evenNumbers
  } else {
    return "Mảng không chứa số chẵn";
  }
}

alert(findEven(arr));
