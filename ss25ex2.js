let num1=parseInt(prompt("Nhập vào số thứ 1"))
let num2=parseInt(prompt("Nhập vào số thứ 2"))
function calSum(a,b){
    if(isNaN(a) || isNaN(b)){
        return "dữ liệu không hợp lệ"
    }else if(parseFloat(a) || parseFloat(b)){
        return "dữ liệu không hợp lệ"
    }
    return a+b;
}
alert(calSum(num1 ,num2)) 
