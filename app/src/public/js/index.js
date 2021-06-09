"use strict";

const table = document.querySelector("table");
const btnRead = document.querySelector("#read");
const inputName = document.querySelector("#name");
const btnView = document.querySelector("#button-view");

btnRead.addEventListener("click", readCustomer);
btnView.addEventListener("click", moveToSite);
table.addEventListener("click", clickHandler);

function clickHandler(e) {
  const target = e.target;
  const tr = target.parentNode;
  tr.setAttribute("id", "checked");
}

function readCustomer() {
  const input = inputName.value;

  fetch(`/api/customers?search=${input}`)
    .then((res) => res.json())
    .then((res) => {
      for (let el of res) {
        const tr = document.createElement("tr");
        const html = `
                  <td></td>
                  <td id="name">${el.name}</td>
                  <td id="no">${el.no}</td>
                  <td>${el.contractStartDate}</td>
                  <td>${el.contractEndDate}</td>
                  <td>${el.contractDescription}</td>
              `;
        tr.innerHTML = html;

        table.appendChild(tr);
      }
    });
}

function moveToSite() {
  const name = document.querySelector("#checked").childNodes[3].innerHTML;
  const no = document.querySelector("#checked").childNodes[5].innerHTML;
  console.log(name);
  console.log(no);
  location.href = `/site/${no}/${name}`;
}
