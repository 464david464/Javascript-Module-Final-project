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

// http request
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://webschool-js-final-api.herokuapp.com/customers");

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState !== XMLHttpRequest.DONE) {
    let loadin = document.querySelector(".loadin");
    let continer = document.querySelector('.continer');

    loadin.style.display = 'flex';
    continer.style.display = 'none'
    loadin.style.backgroundImage = "url('images/Loader.gif')"
  }
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText);
    let loadin = document.querySelector(".loadin");
    let continer = document.querySelector('.continer');

    loadin.style.display = 'none';
    continer.style.display = 'block'
    for (let customers of data) {
      document.querySelector("tbody").appendChild(customersPage(customers));
    }
  }
});

xhr.send(null);

function getFullDetails(numOfCustomer) {
  const customeDetails = document.createElement("div");
  customeDetails.classList.add("customeDetails");

  return custometDetails;
}

let detailsBtns = document.querySelector(".fullDetails");
detailsBtns.addEventListener("click", function () {
  alert(123);
});
