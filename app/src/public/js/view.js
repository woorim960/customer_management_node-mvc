const btnOk = document.querySelector(".button-ok");
const table = document.querySelector("table");
const no = document.querySelector("#user-no").value;
const name = document.querySelector("#user-name").value;
const insertSiteMoveBtn = document.querySelector(".button-insert");
const deleteBtn = document.querySelector(".buttn-delete");
const updateSiteMoveBtn = document.querySelector(".button-update");

view();

btnOk.addEventListener("click", moveToRoot);
insertSiteMoveBtn.addEventListener("click", moveToInsertSite);
table.addEventListener("click", clickHandler);
deleteBtn.addEventListener("click", deletes);
updateSiteMoveBtn.addEventListener("click", moveToUpdateSite);

function moveToRoot() {
  location.href = "/";
}

function moveToInsertSite() {
  location.href = `/site/new/${no}/${name}`;
}

function moveToUpdateSite() {
  location.href = `/site/edit/${no}/${name}`;
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

function clickHandler(e) {
  const target = e.target;
  const tr = target.parentNode;
  tr.setAttribute("id", "checked");
  console.log(tr);
}

function deletes() {
  const tr = document.querySelector("#checked");
  const customerNo = tr.childNodes[3].innerHTML;

  const req = {
    siteNo: customerNo,
  };

  fetch("/api/site", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((isSuccess) => {
      if (isSuccess) {
        tr.remove();
        return alert("정상적으로 삭제 되었습니다.");
      }
      return alert("삭제에 실패하였습니다. 개발자에게 문의해주세요.");
    });
}
