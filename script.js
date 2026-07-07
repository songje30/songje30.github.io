alert("자바스크립트 실행됨");

const TOTAL_STAMP = 20;


// URL QR 번호 확인
const params = new URLSearchParams(
    window.location.search
);

const qrStamp = params.get("stamp");


// 저장된 스탬프 가져오기
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


    // 주소창에서 stamp 제거
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


        ${
            checked

            ?

            `
            <img 
            src="img/KakaoTalk_20260708_000212267.png"
            class="stampImage">
            `

            :

            `
            <div class="emptyStamp">
                ${id}
            </div>
            `

        }


    </div>


    `;

}



// 진행률 표시

document.getElementById("progress").innerHTML =
`
획득 스탬프 : ${count} / ${TOTAL_STAMP}
`;