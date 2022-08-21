const hide_password = document.getElementById('visible')
const login = document.getElementById('log')
const password = document.getElementById('pswd')
const lower = document.getElementById('lower')
const upper = document.getElementById('upper')
const num = document.getElementById('num')
const length = document.getElementById('length')
const mark = document.getElementById('mark')
const username = document.getElementById('username')
const used = document.getElementById('no')
const notUsed = document.getElementById('yes')
const btn = document.getElementById('btn')

USERS_LIST={}

hide_password.addEventListener("click", () =>{
    if (password.type === 'password'){
        hide_password.classList.add("hide")
        password.setAttribute('type', 'text')
    } else{
        hide_password.classList.remove("hide")
        password.setAttribute('type', 'password')
    }
})

function checkPassword(text){
    const low = new RegExp(/[a-z]/)
    const up = new RegExp(/[A-Z]/)
    const n = new RegExp(/[0-9]/)

    if (low.test(text)){
        lower.classList.add('done')
    } else{
        lower.classList.remove('done')
    }

    if (up.test(text)){
        upper.classList.add('done')
    } else{
        upper.classList.remove('done')
    }

    if (n.test(text)){
        num.classList.add('done')
    } else{
        num.classList.remove('done')
    }

    if (text.length>=8){
        length.classList.add('done')
    } else{
        length.classList.remove('done')
    }
}

function checkLogin(text){
    if (USERS_LIST[text]){
        mark.classList.add('invalid')
        mark.classList.remove('valid')
        used.style.display='block'
        notUsed.style.display='none'
    } else{
        mark.classList.add('valid')
        mark.classList.remove('invalid')
        notUsed.style.display='block'
        used.style.display='none'
    }

    if (text.length===0){
        mark.classList.remove('valid')
        mark.classList.remove('invalid')
        used.style.display='none'
        notUsed.style.display='none'
    }
}

btn.addEventListener('click', () =>{
    const name = login.value
    const passw = password.value
    if (USERS_LIST[name]){
        alert("You can't use that username.")
    } else if (!lower.classList.contains('done') || 
               !upper.classList.contains('done') ||
               !num.classList.contains('done') ||
               !length.classList.contains('done')){
        alert("Your password doesn't fit all requirements.")
    } else{
        USERS_LIST[name] = passw
        console.log(USERS_LIST)
        login.value=''
        password.value=''
        lower.classList.remove('done')
        upper.classList.remove('done')
        num.classList.remove('done')
        length.classList.remove('done')
        mark.classList.remove('valid')
        notUsed.style.display='none'
        alert("New account is created!")
    }
})