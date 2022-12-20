function doLogin(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    login(email, password)
}
BASE_URL = 'http://localhost/api/'
function login(email, password){
    let params = {'email': email, 'password': password}
    $.post('http://localhost/api/login.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == 200){
            window.location = 'http://localhost/js/index.html'
        }else{
            alert('Login Failed')
        }
    })
}
function doRegister() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    register(email, password)
}

function register(email, password) {
    let params = { 'email': email, 'password': password }
    $.post('http://localhost/api/register.php', params, function (data) {
        let res = JSON.parse(data)
        if (res.code == true) {
            window.location = 'http://localhost/js/login.html'
        } else 
            alert('Register Failed');
    })
}
