const btnOk = document.querySelector(".button-ok");
const table = document.querySelector("table");
const no = document.querySelector("#user-no").value;
const name = document.querySelector("#user-name").value;

view();
btnOk.addEventListener("click", moveToRoot);

function moveToRoot() {
  location.href = "/";
}

function view() {
  fetch(`/api/sites/${no}/${name}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      for (let el of res) {
        const tr = document.createElement("tr");
        const html = `
                  <td></td>
                  <td id="no">${el.no}</td>
                  <td id="name">${el.name}</td>
                  <td>${el.address}</td>

              `;
        tr.innerHTML = html;

        table.appendChild(tr);
      }
    });
}
