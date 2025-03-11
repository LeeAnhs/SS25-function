let password = prompt("Nhập mật khẩu của bạn");
function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  let UpperCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      UpperCase = true;
      break;
    }
  }
  let LowerCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      LowerCase = true;
      break;
    }
  }
  let Number = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      Number = true;
      break;
    }
  }
  return UpperCase && LowerCase && Number;
}
alert(isStrongPassword(password));
