let str = prompt("Nhập chuỗi cần chuyển đổi:");
function upper(str) {
    let words = str.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            let firstLetter = words[i].charAt(0).toUpperCase();
            let restOfWord = words[i].slice(1);
            result.push(firstLetter + restOfWord);
        }
    }   
    return result.join(" ");
}
alert(upper(str));
