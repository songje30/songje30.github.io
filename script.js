// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    getDatabase,
    ref,
    get,
    set
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";


// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyCKifuJqAUZuzec0eAxfcN2poxXWD6NtBY",
    authDomain: "stamp-c8397.firebaseapp.com",
    databaseURL: "https://stamp-c8397-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stamp-c8397",
    storageBucket: "stamp-c8397.firebasestorage.app",
    messagingSenderId: "211058916315",
    appId: "1:211058916315:web:1cfe783b48b18cdb9d45fe"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



// 화면 요소
const loginPage = document.getElementById("loginPage");
const stampPage = document.getElementById("stampPage");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");




// 로그인 여부 확인
checkSession();




// 로그인 버튼
loginBtn.addEventListener("click", login);




// 로그아웃
logoutBtn.addEventListener("click", () => {

    sessionStorage.clear();

    loginPage.style.display = "block";
    stampPage.style.display = "none";

    nameInput.value = "";
    phoneInput.value = "";

});




// 세션 확인
function checkSession() {

    const phone = sessionStorage.getItem("phone");
    const name = sessionStorage.getItem("name");

    if (phone && name) {

        showStampPage(name);

    } else {

        loginPage.style.display = "block";
        stampPage.style.display = "none";

    }

}




// 로그인
async function login() {

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    loginMessage.innerHTML = "";



    if (name == "" || phone == "") {

        loginMessage.innerHTML = "이름과 전화번호를 입력하세요.";

        return;

    }



    const userRef = ref(db, "users/" + phone);

    const snapshot = await get(userRef);



    // 신규 사용자
    if (!snapshot.exists()) {

        await set(userRef, {

            name: name,

            stamps: {}

        });

    }

    // 기존 사용자
    else {

        const user = snapshot.val();

        if (user.name != name) {

            loginMessage.innerHTML =
                "이름 또는 전화번호가 올바르지 않습니다.";

            return;

        }

    }



    // 세션 저장
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("name", name);

    showStampPage(name);

}




// 스탬프 화면
function showStampPage(name) {

    loginPage.style.display = "none";

    stampPage.style.display = "block";

    userName.innerHTML = name + "님";



    // 2편에서 호출
    if (typeof loadStampBook === "function") {

        loadStampBook();

    }

}


// ===============================
// 스탬프 기능
// ===============================


import {
    update
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";



// 스탬프 개수
const TOTAL_STAMP = 4;



// 스탬프 화면 생성
async function loadStampBook() {


    const phone = sessionStorage.getItem("phone");


    if (!phone) return;



    // QR 스탬프 확인
    const params = new URLSearchParams(
        window.location.search
    );


    const qrStamp = params.get("stamp");



    if (qrStamp) {


        const id = String(qrStamp).padStart(2, "0");



        if (
            Number(id) >= 1 &&
            Number(id) <= TOTAL_STAMP
        ) {


            const stampRef = ref(
                db,
                `users/${phone}/stamps/${id}`
            );



            const check = await get(stampRef);



            // 아직 없는 스탬프만 저장
            if (!check.exists()) {


                await set(
                    stampRef,
                    true
                );


            }

        }



        // URL에서 stamp 제거
        history.replaceState(
            null,
            "",
            window.location.pathname
        );

    }



    // Firebase 스탬프 읽기
    const stampDataRef = ref(
        db,
        `users/${phone}/stamps`
    );


    const snapshot = await get(
        stampDataRef
    );


    let stamps = {};



    if (snapshot.exists()) {

        stamps = snapshot.val();

    }



    renderStampBook(stamps);


}




// 스탬프 화면 출력
function renderStampBook(stamps) {


    const stampBook =
        document.getElementById("stampBook");



    stampBook.innerHTML = "";



    let count = 0;



    for (
        let i = 1;
        i <= TOTAL_STAMP;
        i++
    ) {


        const id =
            String(i).padStart(2, "0");



        const checked =
            stamps[id] === true;



        if (checked) {

            count++;

        }



        stampBook.innerHTML += `

            <div class="stamp 
                ${checked ? "checked" : ""}">

                ${
                    checked

                    ?

                    `
                    <img 
                    src="img/stamp${id}.png"
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



    document.getElementById(
        "progress"
    ).innerHTML =

    `
    획득 스탬프 : ${count} / ${TOTAL_STAMP}
    `;



}