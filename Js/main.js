var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUpPass  = document.getElementById('signUpPass')
var signUpBtn = document.getElementById('signUpBtn')
var info = document.getElementById('info')
 
var users = []

if (JSON.parse(localStorage.getItem('usersInfo')) != null){
    users = JSON.parse(localStorage.getItem('usersInfo'))
}

// signUp 
function signUp(){
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPass.value == '' ){
        info.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (var i = 0; i < users.length; i++) {
            if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
                info.innerHTML = `<span class="text-danger my-3">Email already exist</span>`
                return false
            }
        }
        getUserData()
        info.innerHTML = `<span class="text-success my-3">success</span>`
    }
}

function getUserData(){
    var user = {
        name:signUpName.value,
        email:signUpEmail.value,
        pass : signUpPass.value
    }
    users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users))
    location.href = './index.html'
}

// events
signUpBtn?.addEventListener('click',function(){
    signUp()
})
// Sign in 

var signInEmail = document.getElementById('signInEmail')
var signInPass = document.getElementById('signInPass')
var logBtn = document.getElementById('logBtn')
var checkInput = document.getElementById('checkInput')
function signIn(){
    if ( signInEmail.value == '' || signInPass.value == '' ) {
        checkInput.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (var i = 0; i < users.length; i++) {
            if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPass.value == users[i].pass){
                checkInput.innerHTML = `<span class="text-success my-3">success</span>`
                localStorage.setItem('userName',JSON.stringify(users[i].name))
                location.href = './home.html'
                return
            }
        }   
        checkInput.innerHTML = `<span class="text-danger my-3">You should sign up</span>`
    }
}

logBtn?.addEventListener('click',function(){
    signIn()
})

// homePage
var homePage = document.querySelector('#homeUser')
var loggedUser = localStorage.getItem('userName')

homePage.innerHTML = `<h2 class="text-info">Welcome ${loggedUser}</h2>`