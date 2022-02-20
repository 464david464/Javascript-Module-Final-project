// logIn Page
function init() {
  if (localStorage.getItem("isLog?") == "true") {
    document.querySelector("#login").style.display = "none";
    document.querySelector(".home-continer").style.display = "flex";
    document.body.style.backgroundColor = "white";
  }
}

function checkPass(pass) {
  const dataPass = {
    pin: "4646"
  };
  return dataPass["pin"] === pass;
}

let numINp = document.querySelector(".num");
let allBtn = document.querySelectorAll(".numB");
let enter = document.querySelector(".enter");
let del = document.querySelector('.del');

del.addEventListener("click", function () {
  numINp.value = numINp.value.slice(0, -1);
  numINp.removeAttribute("placeholder");
})

for (let btns of allBtn) {
  btns.addEventListener("click", function () {
    if (numINp.value.length > 4) {
      numINp.value.slice(0, -1);
    }
    if (numINp.value.length < 4) {
      numINp.value += btns.value;
    }
  });
}


enter.addEventListener("click", login);

document.addEventListener("keypress", function (event) {
  if (event.key != "Enter") {
    if (numINp.value.length > 4) {
      numINp.value.slice(0, -1);
    }
    if (numINp.value.length < 4) {
      numINp.value += event.key;
      numINp.removeAttribute("placeholder");
    }
    if(event.keyCode == 8){
      numINp.value = numINp.value.slice(0, -1);
      numINp.removeAttribute("placeholder");
    }
  } else {
    login();
  }
});



function login() {
  if (!checkPass(numINp.value)) {
    numINp.value = "";
    numINp.setAttribute("placeholder", "The password is incorrect");
  } else {
    document.querySelector("#login").style.display = "none";
    localStorage.setItem("isLog?", "true");
    document.querySelector(".home-continer").style.display = "flex";
    document.body.style.backgroundColor = "white";
  }
}

init();

//===========================================================

// home Phge
let productsBtn = document.querySelector("#products");
let imgBgcDIv = document.querySelector(".ingView");

productsBtn.addEventListener("mouseenter", function () {
  imgBgcDIv.style.backgroundImage = "url('images/product.jpg')";
});
productsBtn.addEventListener("mouseleave", function () {
  imgBgcDIv.removeAttribute("style");
});

let customersBtn = document.querySelector("#customers");

customersBtn.addEventListener("mouseenter", function () {
  imgBgcDIv.style.backgroundImage = "url('images/customers.png')";
});
customersBtn.addEventListener("mouseleave", function () {
  imgBgcDIv.removeAttribute("style");
});
