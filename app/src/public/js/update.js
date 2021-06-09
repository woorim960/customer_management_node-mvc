const btnOk = document.querySelector(".button-ok");
const table = document.querySelector("table");
const no = document.querySelector("#user-no").value;
const insertName = document.querySelector("#user-site-name");
const insertAddress = document.querySelector("#user-site-address");

btnOk.addEventListener("click", output);

function output() {
  const req = {
    siteNo: no,
    siteName: insertName.value,
    siteAddress: insertAddress.value,
  };

  fetch("/api/site", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((isSuccess) => {
      if (isSuccess) return alert("사이트가 정보가 정상 수정 되었습니다.");
      return alert(
        "사이트 수정 중 문제가 발생하였습니다. 개발자에게 문의해주세요."
      );
    });

  location.href = document.referrer;
}
