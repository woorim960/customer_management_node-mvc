const btnOk = document.querySelector(".button-ok");
const table = document.querySelector("table");
const no = document.querySelector("#user-no").value;
const name = document.querySelector("#user-name").value;
const insertName = document.querySelector("#user-site-name");
const insertAddress = document.querySelector("#user-site-address");

btnOk.addEventListener("click", output);

function output() {
  const req = {
    customerNo: no,
    siteName: insertName.value,
    siteAddress: insertAddress.value,
  };

  fetch("/api/site", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((isSuccess) => {
      if (isSuccess) return alert("사이트가 정상 등록 되었습니다.");
      return alert(
        "사이트 등록 중 문제가 발생하였습니다. 개발자에게 문의해주세요."
      );
    });

  location.href = `/site/${no}/${name}`;
}
