// logIn Page
function init() {
  if (localStorage.getItem("isLog?") == "true") {
    document.querySelector("#login").style.display = "none";
    document.querySelector(".home-continer").style.display = 'flex';
    document.body.style.backgroundColor = 'white';
  }
}

function checkPass(pass) {
  const dataPass = {
    pin: "4646",
  };
  return dataPass["pin"] === pass;
}
let numINp = document.querySelector(".num");
let allBtn = document.querySelectorAll(".inp");
let enter = document.querySelector("a");



document.addEventListener("keyup", function (event) {
  if (event.key != "Enter") {
    for (let btns of allBtn) {
      btns.addEventListener("click", function () {
        numINp.value += btns.value;
        length4();
      });
    }
    if (numINp.value.length > 4) {
      numINp.value = numINp.value.slice(0, -1);
      document.querySelector(".moreFrome4").style.display = "block";
    } else {
      numINp.value += event.key;
      document.querySelector(".moreFrome4").style.display = "none";
      numINp.removeAttribute("placeholder");
    }
  } else {
    login();
  }
});

function length4() {
  if (numINp.value.length > 4) {
    numINp.value = numINp.value.slice(0, -1);
    document.querySelector(".moreFrome4").style.display = "block";
  }
}

allBtn[10].addEventListener("click", function () {
  numINp.value = numINp.value.slice(0, -1);
  document.querySelector(".moreFrome4").style.display = "none";
  numINp.removeAttribute("placeholder");
});

function login() {
  if(!checkPass(numINp.value)) {
    document.querySelector(".moreFrome4").style.display = "none";
    numINp.setAttribute("placeholder", "The password is incorrect");
  } else {
    document.querySelector("#login").style.display = "none";
    localStorage.setItem("isLog?", "true");
    document.querySelector(".home-continer").style.display = 'flex';
    document.body.style.backgroundColor = 'white';
  }
}

init();
enter.addEventListener("click", login);

//===========================================================


// home Phge
let productsBtn = document.querySelector('#products');
let imgBgcDIv = document.querySelector('.ingView');

productsBtn.addEventListener('mouseenter', function(){
    imgBgcDIv.style.backgroundImage = "url('images/product.jpg')"
});
productsBtn.addEventListener('mouseleave', function(){
    imgBgcDIv.removeAttribute('style')
});


let customersBtn = document.querySelector('#customers');

customersBtn.addEventListener('mouseenter', function(){
    imgBgcDIv.style.backgroundImage = "url('images/customers.png')"
});
customersBtn.addEventListener('mouseleave', function(){
    imgBgcDIv.removeAttribute('style')
});