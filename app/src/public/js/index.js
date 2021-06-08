"use strict";

const table = document.querySelector("table");
const btnRead = document.querySelector("#read");
const btnSearch = document.querySelector(".button-search");

btnRead.addEventListener("click", readCustomer);
btnSearch.addEventListener("click", moveToSite);

function readCustomer() {
  console.log(1);
  fetch("/api/customers")
    .then((res) => res.json())
    .then((res) => {
      for (let el of res) {
        const tr = document.createElement("tr");
        const html = `
                  <td>${el.no}</td>
                  <td>${el.name}</td>
                  <td>${el.customerNo}</td>
                  <td>${el.contractStartDate}</td>
                  <td>${el.contractEndDate}</td>
                  <td>${el.contract_description}</td>
              `;
        tr.innerHTML = html;

        table.appendChild(tr);
      }
    });
}

function moveToSite() {
  location.href = "/site";
}
