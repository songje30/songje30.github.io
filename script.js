alert("자바스크립트 실행됨");

// 스탬프 개수
const TOTAL_STAMP = 4;

// URL의 stamp 번호 확인
const params = new URLSearchParams(window.location.search);
const qrStamp = params.get("stamp");

// 저장된 스탬프 불러오기
let stamps = JSON.parse(localStorage.getItem("stampBook") || "[]");

// QR 접속 처리
if (qrStamp) {

    const id = String(qrStamp).padStart(2, "0");

    // 01~04만 허용
    if (
        Number(id) >= 1 &&
        Number(id) <= TOTAL_STAMP &&
        !stamps.includes(id)
    ) {
        stamps.push(id);

        localStorage.setItem(
            "stampBook",
            JSON.stringify(stamps)
        );
    }

    // URL에서 ?stamp 제거
    history.replaceState(
        null,
        "",
        window.location.pathname
    );
}

// 화면 표시
const stampBook = document.getElementById("stampBook");

let count = 0;

for (let i = 1; i <= TOTAL_STAMP; i++) {

    const id = String(i).padStart(2, "0");
    const checked = stamps.includes(id);

    if (checked) count++;

    stampBook.innerHTML += `
        <div class="stamp ${checked ? "checked" : ""}">
            ${
                checked
                ? `<img src="img/stamp${id}.png" class="stampImage">`
                : `<div class="emptyStamp">${id}</div>`
            }
        </div>
    `;
}

// 진행률
document.getElementById("progress").innerHTML =
`획득 스탬프 : ${count} / ${TOTAL_STAMP}`;