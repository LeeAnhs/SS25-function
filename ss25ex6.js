let str = prompt("Nhập chuỗi cần kiểm tra:");
function isPalindrome(str) {
    if (str === "") {
        return "Chuỗi rỗng";
    }
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i];
        }
    }   
    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) {
            return "Không phải chuỗi đối xứng";
        }
    }
    return "Là chuỗi đối xứng";
}
alert(isPalindrome(str));
