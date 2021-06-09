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
  tr.classList.toggle("checked");
}

function readCustomer() {
  const input = inputName.value;

  fetch(`/api/customers?search=${input}`)
    .then((res) => res.json())
    .then((res) => {
      for (let i in res) {
        const tr = document.createElement("tr");
        const html = `
                  <td>${Number(i) + 1}</td>
                  <td id="name">${res[i].name}</td>
                  <td id="no">${res[i].no}</td>
                  <td>${res[i].contractStartDate}</td>
                  <td>${res[i].contractEndDate}</td>
                  <td>${res[i].contractDescription}</td>
              `;
        tr.innerHTML = html;

        table.appendChild(tr);
      }
    });
}

function moveToSite() {
  const checkedNode = document.querySelectorAll(".checked");

  if (checkedNode.length === 1) {
    const name = document.querySelector(".checked").childNodes[3].innerHTML;
    const no = document.querySelector(".checked").childNodes[5].innerHTML;
    location.href = `/site/${no}/${name}`;
  } else if (checkedNode.length === 0) {
    alert("고객 정보를 클릭해주십시오.");
  } else {
    alert("한개만 클릭해주십시오.");
  }
}
