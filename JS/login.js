let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
let users = JSON.parse(localStorage.getItem("users")) || []
console.log(currentUser);
if (currentUser.length != 0) {
    document.getElementById("email").value= currentUser.email;
    document.getElementById("password").value= password = currentUser.password;
}
function login() {
  let  email = document.getElementById("email").value;
let password = document.getElementById("password").value;
    for (let i = 0; i < users.length; i++) {
        if (email==users[i].email&&password==users[i].password) {
          notification("Đăng nhập thành công.....")
          localStorage.setItem("idUsers",users[i].id)
          setTimeout(() => {
              window.location.href="http://127.0.0.1:5500/Page%20ch%C3%ADnh.html"
          }, 3500);
          console.log("bbbb");
          break;
        }else{
          console.log("aaaaaa");
          notification("Tài khoản sai email,password hoặc chưa được đăng ký!")
        }
      }
      localStorage.removeItem("currentUser")
    }
