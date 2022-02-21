function init() {
  if (localStorage.getItem("isLog?") !== "true") {
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

  table.addEventListener("click", function () {
    let continerCustomer = document.querySelector("#cusomer");
    continerCustomer.style.display = "flex";
    document.querySelector(".continer").style.display = "none";

    let divCustomer = document.createElement("div");
    divCustomer.classList.add("customerDtetailsWindow");

    let customerId = document.createElement("p");
    customerId.classList.add("customerId");

    let customerName = document.createElement("p");
    customerName.classList.add("name");

    let imgCustomer = document.createElement("img");
    let emailCustomer = document.createElement("p");
    let company = document.createElement("p");
    let country = document.createElement("p");
    let dateB = document.createElement("p");
    customerName.classList.add("date");
    let wait = document.createElement("div");
    wait.setAttribute("id", "wait");
    let x = document.createElement("span");
    x.innerText = "X";

    continerCustomer.appendChild(divCustomer);
    divCustomer.appendChild(customerId);
    divCustomer.appendChild(customerName);
    divCustomer.appendChild(imgCustomer);
    divCustomer.appendChild(emailCustomer);
    divCustomer.appendChild(company);
    divCustomer.appendChild(country);
    divCustomer.appendChild(dateB);
    divCustomer.appendChild(x);
    divCustomer.appendChild(wait);

    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://webschool-js-final-api.herokuapp.com/customers/${cusEL.id}`,
      true
    );
    if (xhr.readyState !== XMLHttpRequest.DONE) {
      wait.style.backgroundImage = "url('images/Wait.gif')";
      customerId.style.display = "none";
      customerName.style.display = "none";
      imgCustomer.style.display = "none";
      emailCustomer.style.display = "none";
      company.style.display = "none";
      country.style.display = "none";
      dateB.style.display = "none";
    }
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        wait.style.display = 'none'
        customerId.style.display = "block";
        customerName.style.display = "block";
        imgCustomer.style.display = "block";
        emailCustomer.style.display = "block";
        company.style.display = "block";
        country.style.display = "block";
        dateB.style.display = "block";
        const data = JSON.parse(xhr.responseText);

        customerName.innerText = "name: " + data.first + " " + data.last;
        imgCustomer.setAttribute("src", "https://picsum.photos/800/500");
        dateB.innerText = "date of birth: " + data.created_at;
        customerId.innerText = "customer id: " + data.id;
        company.innerText = "company: " + data.company;
        country.innerText = "country: " + data.country;
        emailCustomer.innerText = "email: " + data.email;

        x.addEventListener("click", function () {
          document.querySelector(".continer").classList.remove("blur");
          continerCustomer.innerHTML = "";
          document.querySelector(".continer").style.display = "block";
          continerCustomer.style.display = "none";
        });
      }
    });

    xhr.send(null);
  });

  return table;
}

init();
// http request
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://webschool-js-final-api.herokuapp.com/customers");
if (xhr.readyState !== XMLHttpRequest.DONE) {
  let loadin = document.querySelector(".loadin");
  let continer = document.querySelector(".continer");

  loadin.style.display = "flex";
  continer.style.display = "none";
  loadin.style.backgroundImage = "url('images/Loader.gif')";
}
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText);
    let loadinContiner = document.querySelector("#loadin");
    let loadin = document.querySelector(".loadin");
    let continer = document.querySelector(".continer");

    loadinContiner.style.display = "none";
    loadin.style.display = "none";
    continer.style.display = "block";
    for (let customers of data) {
      document.querySelector("tbody").appendChild(customersPage(customers));
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
