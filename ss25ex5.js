let arr = [];
let input = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
for (let i = 0; i < input; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1)));
    arr.push(num);
}
function number(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return "dữ liệu không hợp lệ";
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    if (count > 0) {
        return count;
    } else {
        return "không có số nguyên dương trong mảng";
    }
}

alert(number(arr));
