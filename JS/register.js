function register(e) {
    e.preventDefault();
let users=JSON.parse(localStorage.getItem("users"))||[]
let currentUser=JSON.parse(localStorage.getItem("currentUser"))
function logIn() {
    
}
    function uuid() {
        return Math.ceil(Math.random()*1000);
    }
    let userName=document.getElementById("userName").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let info={
        name:userName,
        password:password,
        email:email,
        cart:[],
        id:uuid()
    }
    if (users.length==0) {
        users.push(info);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUser",JSON.stringify(info))
        notification("Đăng Ký tài khoản thành công...")
        setTimeout(() => {
            window.location.href="http://127.0.0.1:5500/login.html"
        }, 3500);
 
        return
    }
    let result=users.filter((item)=>{
        return item.email==email;
    })
    if (result.length==0) {
        users.push(info);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUser",JSON.stringify(info))
        notification("Đăng Ký tài khoản thành công...")
        setTimeout(() => {
            window.location.href="http://127.0.0.1:5500/login.html"
        }, 3500);
    }else{
       myFunction("Tài khản đã tồn tại...")
    }
 
}