let arr=[2,4,8,1,9]
function findMin( arr ) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            }
            }
            return min;
}
alert("Phần tử nhỏ nhất trong mảng là :" + findMin(arr));