let input = parseInt(prompt("Nhập số của bạn"));
function isPrime(num) {
    if (isNaN(num)) {
        return "dữ liệu không hợp lệ";
    }
    if (num < 2) {
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}

alert(isPrime(input));
