alert("자바스크립트 실행됨");

const TOTAL_STAMP = 20;


const params = new URLSearchParams(
    window.location.search
);


const qrStamp = params.get("stamp");


let stamps = JSON.parse(
    localStorage.getItem("stampBook") || "[]"
);


// QR 접속 처리
if (qrStamp) {

    let id = String(qrStamp).padStart(2, "0");

    if (!stamps.includes(id)) {

        stamps.push(id);

        localStorage.setItem(
            "stampBook",
            JSON.stringify(stamps)
        );

    }


    history.replaceState(
        null,
        "",
        window.location.pathname
    );

}


// 스탬프 표시

const stampBook =
document.getElementById("stampBook");


let count = 0;


for (let i = 1; i <= TOTAL_STAMP; i++) {


    let id = String(i).padStart(2, "0");


    let checked = stamps.includes(id);


    if (checked) {
        count++;
    }


    stampBook.innerHTML += `

        <div class="stamp ${checked ? "checked" : ""}">

            <input 
            type="checkbox"
            ${checked ? "checked" : ""}
            disabled>

            ${id}번 스탬프

        </div>

    `;

}


// 진행률

document.getElementById("progress").innerHTML =
`
획득 스탬프 : ${count} / ${TOTAL_STAMP}
`;