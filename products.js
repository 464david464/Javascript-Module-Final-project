function init() {
    if (localStorage.getItem("isLog?") !== "true") {
      window.location.href = "index.html";
    }
  }

function buildProductPage(product) {
  let tr = document.createElement("tr");
  let title = document.createElement("td");
  title.innerText = product.title;
  title.classList.add("title");

  let descrition = document.createElement("p");
  descrition.innerText = product.description;
  descrition.classList.add("description");

  let quantity = document.createElement("td");
  quantity.innerText = product.quantity;

  let productImage = document.createElement("td");
  productImage.classList.add("imageContiner");
  let image = document.createElement("img");
  image.classList.add("imageProduct");
  image.setAttribute("src", product.url);

  tr.appendChild(title);
  title.appendChild(descrition);
  tr.appendChild(quantity);
  tr.appendChild(productImage);
  productImage.appendChild(image);
  return tr;
}

init()
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://webschool-js-final-api.herokuapp.com/products");

if (xhr.readyState !== XMLHttpRequest.DONE) {
  let continer = document.querySelector(".continer");
  let loadin = document.querySelector("#loadin");
  continer.style.display = "none";
  loadin.style.display = "flex";
}

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText);
    let loadin = document.querySelector("#loadin");
    let continer = document.querySelector(".continer");
    continer.style.display = "block";
    loadin.style.display = "none";

    for (let product of data) {
      document.querySelector("tbody").appendChild(buildProductPage(product));
    }
  }
});

xhr.send(null);

const x = document.querySelector("#x");
const logOut = document.querySelector(".log-out");
const user = document.querySelector(".bi-person");
const logOutBtn = document.querySelector("#btn-log-out");

user.addEventListener("click", function () {
  logOut.style.display = "flex";
});
x.addEventListener("click", function () {
  logOut.style.display = "none";
});
logOutBtn.addEventListener("click", function () {
  localStorage.removeItem("isLog?");
  location.reload();
});

