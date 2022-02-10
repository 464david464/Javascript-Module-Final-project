function checkPass(pass) {
    const dataPass = {
        pin: "4646"
    };
    return dataPass['pin'] === pass;
}
let numINp = document.querySelector('.num');
let allBtn = document.querySelectorAll('.inp');
let enter = document.querySelector('a');

for(let btns of allBtn) {
    btns.addEventListener('click', function() {
        numINp.value += btns.value
        length4()
    })
}

document.addEventListener('keyup', function(event) {
    
        numINp.value += event.key;
        length4()
})


function length4() {
    if(numINp.value.length > 4) {
        numINp.value = numINp.value.slice(0, -1)
        document.querySelector('.moreFrome4').style.display = 'block'
        
    }
}

allBtn[10].addEventListener('click', function() {
    numINp.value = numINp.value.slice(0, -1)
    document.querySelector('.moreFrome4').style.display = 'none'
})

function login () {
    if(! checkPass(numINp.value)) {
        document.querySelector('.moreFrome4').style.display = 'none'
        numINp.value = '';
        numINp.setAttribute("placeholder", "The password is incorrect")
    }else{
        enter.setAttribute("href", "home.html")
        
    }
}


enter.addEventListener('mousedown', login)