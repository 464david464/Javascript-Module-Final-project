function init() {
  if(localStorage.getItem("isLog?") !== 'true') {
    window.location.href = "index.html";
  }
}
function customersPage(cusEL) {
  const table = document.createElement("tr");
  table.classList.add("tr");

  const id = document.createElement("td");
  id.innerText = cusEL.id;

  const fNAme = document.createElement("td");
  fNAme.innerText = cusEL.first;

  const lName = document.createElement("td");
  lName.innerText = cusEL.last;

  const email = document.createElement("td");
  email.innerText = cusEL.email;

  const fullDetails = document.createElement("td");
  fullDetails.innerText = "Full details";
  fullDetails.classList.add("fullDetails");

  table.appendChild(id);
  table.appendChild(fNAme);
  table.appendChild(lName);
  table.appendChild(email);
  table.appendChild(fullDetails);
  return table;
}

init()
// http request
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://webschool-js-final-api.herokuapp.com/customers");
if (xhr.readyState !== XMLHttpRequest.DONE) {
  let loadin = document.querySelector(".loadin");
  let continer = document.querySelector('.continer');

  loadin.style.display = 'flex';
  continer.style.display = 'none'
  loadin.style.backgroundImage = "url('images/Loader.gif')"
}
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText);
    let loadinContiner = document.querySelector('#loadin')
    let loadin = document.querySelector(".loadin");
    let continer = document.querySelector('.continer');

    loadinContiner.style.display = 'none'
    loadin.style.display = 'none';
    continer.style.display = 'block'
    for (let customers of data) {
      document.querySelector("tbody").appendChild(customersPage(customers));
    }
  }
});

xhr.send(null);

const x = document.querySelector('#x');
const logOut = document.querySelector('.log-out');
const user = document.querySelector('.bi-person');
const logOutBtn = document.querySelector('#btn-log-out');

user.addEventListener('click', function() {
  logOut.style.display = 'flex'
})
x.addEventListener('click', function() {
  logOut.style.display = 'none'
})
logOutBtn.addEventListener('click', function() {
  localStorage.removeItem('isLog?');
  location.reload();
})