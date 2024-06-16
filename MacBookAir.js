//Data SET : 소스 코드 잘 몰라도 결과창 띄워놓고 비교하면서 수정 (백업필)
const dbData = {
    logo : '<i class="fab fa-apple"></i>',  //로고 Fontawesome 홈페이지에 가서 원하는 로고 고르고 소스 복붙.
    mainLink : 'index.html', //로고 클릭시 링크
    mainMenu :{
        name : '쇼핑 및 알아보기',  //메뉴 이름 : 홈페이지 하단의 세부 메뉴 타이틀
        list : [
            {name : 'Mac', link : '/Mac.html'},         //메뉴 이름, 링크
            {name : 'iPad', link : '#'},        //메뉴 이름, 링크
            {name : 'iPhone', link : '#'},      //메뉴 이름, 링크
            {name : 'Watch', link : '#'},       //메뉴 이름, 링크
            {name : 'Music', link : '#'},       //메뉴 이름, 링크
        ]
        
    },
    product_Menu :{
        name : '쇼핑 및 알아보기',  //메뉴 이름 : 홈페이지 하단의 세부 메뉴 타이틀
        list : [
            {name : '11', link : '/Mac.html'},         //메뉴 이름, 링크
            {name : 'i', link : '#'},        //메뉴 이름, 링크
            {name : '3', link : '#'},      //메뉴 이름, 링크
            {name : '4', link : '#'},       //메뉴 이름, 링크
            {name : 'M', link : '#'},       //메뉴 이름, 링크
        ]
        
    },
    searchLink : '#',   //돋보기 모양 클릭시 링크
    cartLink : '#',     //장바구니 링크
    infoMessage : '', //메뉴바 하단의 텍스트
    mainProducts : [    //메뉴바 하단의 상품목록 (최소 1개 이상 남겨두고 나머지 삭제 가능)
        {
            name : 'MacBook Pro',                             //상품 제목
            info : '비교 불가 성능  시선 강탈 매력',                    //상품 설명
            text : '2,390,000원부터 (보상 판매 미적용)',       //가격 등의 상세정보
            pageLink : 'MacBookPro.html',                                 //상품 페이지 이동 링크주소
            orderLink : '#',                                //구입 페이지 이동 링크주소
            fontColor : '#000000',                          //제목, 텍스트 폰트 색상
            linkColor : '#517cd1',                          //더알아보기 구입하기 링크 폰트 색상
            imgLink : 'https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/welcome-hero/large.mp4'
        },
    ],
    subProducts : [
        
        
    ],
    //하단 이벤트 문구
    eventText : `
                * 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상 판매
                금액은 보상 판매되는 스마트폰의 상태 및 모델에 따라 달라집니다. 19세 이상이어야 합니다. 일부 매장에서는 본 프로그램을 이용할 수 없으며, 일부 기기는 보상 판매 대상이 아닙니다.
                Apple은 어떤 기기든 수령을 거부하거나, 그 수량을 제한할 권리를 보유합니다. 새 Apple 기기 구매 시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 추가 약관은
                apple.com/kr/trade-in을 참고하십시오.`,
    //하단 상세 메뉴 (메인메뉴가 가장 좌측에 자동배치)
    subMenu : [
        {
            name : '서비스',                //서브 메뉴 이름
            list : [                      //서브 메뉴 목록 (최소 1개 이상 설정, 나머지 삭제가능 [2개 이상 권장])
                {name : 'Apple Music', link : '#'},
                {name : 'Apple Arcade', link : '#'},
                {name : 'iCloud', link : '#'},
                {name : 'Apple Books', link : '#'},
                {name : 'Apple Store', link : '#'}
            ]
        },
        {
            name : '계정',
            list : [
                {name : 'Apple ID 관리', link : '#'},
                {name : 'Apple Store 계정', link : '#'},
                {name : 'iCloud.com', link : '#'},
            ]
        },
        {
            name : 'Apple Store',
            list : [
                {name : '매장 찾기', link : '#'},
                {name : '온라인에서 쇼핑하기', link : '#'},
                {name : 'Genius Bar', link : '#'},
                {name : 'Today at Apple', link : '#'},
                {name : 'Apple 캠프', link : '#'},
                {name : 'Apple Store 앱', link : '#'},
                {name : '리퍼 및 특가 제품', link : '#'},
                {name : '금융 혜택', link : '#'},
                {name : 'Apple Trade In', link : '#'},
                {name : '주문 상태', link : '#'},
                {name : '쇼핑 도움말', link : '#'},
            ]
        },
        {
            name : '비즈니스',
            list : [
                {name : 'Apple과 비즈니스', link : '#'},
                {name : '비즈니스를 위한 제품 쇼핑하기', link : '#'},
            ]
        },
        {
            name : '교육',
            list : [
                {name : 'Apple과 교육', link : '#'},
                {name : '초중고용 제품 쇼핑하기', link : '#'},
                {name : '대학 생활을 위한 제품 쇼핑하기', link : '#'},
            ]
        },
        {
            name : 'Apple의 가치관',
            list : [
                {name : '손쉬운 사용', link : '#'},
                {name : '환경', link : '#'},
                {name : '개인정보 보호', link : '#'},
                {name : '협력업체에 대한 책임', link : '#'},
            ]
        },
        {
            name : 'Apple 정보',
            list : [
                {name : 'Newsroom', link : '#'},
                {name : 'Apple 리더십', link : '#'},
                {name : '채용 안내', link : '#'},
                {name : '이벤트', link : '#'},
                {name : '일자리 창출', link : '#'},
                {name : 'Apple 연락처', link : '#'},
            ]
        },
    ],
    //페이지 하단의 서비스 텍스트
    serviceText :`
        다양한 쇼핑 방법 : Apple Store를 방문하거나, 리셀러를 찾아보거나, 080-330-8877번으로 전화하세요.
    `,
    //홈페이지 권리 등 copyright 
    siteInfo : {
        copyright : `Copyright <i class="far fa-copyright"></i> 2021 Apple Inc. 모든 권리 보유.`,
        infoList : [
            {title : '개인정보 처리방침', link : '#'},
            {title : '웹 사이트 이용 약관', link : '#'},
            {title : '판매 및 환불', link : '#'},
            {title : '법적 고지', link : '#'},
            {title : '사이트 맵', link : '#'},
        ]
    },
    //회사 정보 등 홈페이지 최 하단에 위치
    companyInfo : [
        {title : '사업자등록번호 : ', data : '120-81-84429'},
        {title : '통신판매업신고번호 : ', data : '제 2011-서울강남-00810'},
        {title : '대표이사 : ', data : 'PETER DENWOOD'},
        {title : '주소 : ', data : '서울 특별시 강남구 영동대로 517'},
        {title : '대표전화 : ', data : '02-6712-6700'},
        {title : '팩스 : ', data : '02-6928-0000'}
    ]
};

const body = document.querySelector('body');
//HTML

//header 
const header = document.createElement('header');
{
    header.className = 'header';
    const header_logo = document.createElement('div');
    header_logo.classList.add('logo');
    header_logo.innerHTML = `
        <div class="list-icon"><i class="fas fa-bars"></i></div>
        <div class="logo-icon"><a href="#">${dbData.logo}</a></div>
    `;
    const header_menuList = document.createElement('ul');
    const header_product_menuList = document.createElement('ul');
    header_menuList.className = 'menu-list';
    header_product_menuList.className = 'product-menu-list';
    dbData.mainMenu.list.forEach(menu => {
        header_menuList.innerHTML += `<li class="menu-item"><a href="${menu.link}">${menu.name}</a></li>`;
    });
    dbData.product_Menu.list.forEach(pmenu => {
        header_product_menuList.innerHTML += `<li class="product-menu-item"><a href="${pmenu.link}">${pmenu.name}</a></li>`;
    });
    const header_icons = document.createElement('ul');
    header_icons.className = 'icons';
    header_icons.innerHTML = `
        <li class="search-icon"><a href="${dbData.searchLink}"><i class="fas fa-search"></i></a></li>
        <li class="cart-icon"><a href="${dbData.cartLink}"><i class="fas fa-shopping-bag"></i></a></li>
    `;
    header.append(header_logo,header_menuList,header_icons);
}

//Information
const shopInfo = document.createElement('section');
{
    shopInfo.className = 'shop-info';
    shopInfo.innerHTML = `
        <p>${dbData.infoMessage}</p>
    `;
}

//Main Collection
const mainCollection = document.createElement('section');
{
    mainCollection.className = 'main-products';
    const mainCollectionUl = document.createElement('ul');
    mainCollectionUl.className = 'product-list';
    dbData.mainProducts.forEach(product=>{
        let newLi = document.createElement('li');
        newLi.className = 'product';
        newLi.style = `background : url('${product.imgLink}') center center/ cover no-repeat;`;
        newLi.innerHTML += `
            <div>
                <video src="https://www.apple.com/105/media/ww/macbook-air/2024/abecf8fa-b944-4698-94ce-14616e166bff/anim/design/hero/medium_2x.mp4"
                autoplay muted></video>
            </div>
            <br>
            <div style="text-align: center; padding: 50px 0px 100px 0px;">
                <a href="" style="background-color: #0071e3; padding: 11px 41px; border-radius: 20px; text-decoration: none; color: white;">구입하기</a>
			    </a>
                <br><br><br>
                <h1 style="color: 1d1d1f; font-size:62px;">날렵하게. 강력하게. M3답게</h1><br>
                <p style="width:800px; font-family : AppleSDGothicNeoH;" align="left">
                    <span style="color:#8b8b8b; font-size: 24px;"><b>세상에서 가장 사랑받는 노트북</span> <span style="font-size: 24px;"><b>MacBook Air<span style="color:#86868b; font-size: 24px;"><b>가</span> M3 칩<span style="color:#86868b; font-size: 24px;"><b>과 만나 한층 강력해졌습니다. 일부터 놀이까지, 무엇이든 가뿐하죠. 최대 18시간의 배터리 사용 시간1과 극강의 휴대성을 자랑하는 MacBook Air와 함께라면 어디서든, 어떤 일이든 너끈히 해낼 수 있습니다.</b></span>
                </p>
                <br>
                <p style="width:800px; font-family : AppleSDGothicNeoH;" align="left">
                <span style="color:#BF4800; font-size: 19px;"><b>New</span> <span style="font-size: 19px;"><b>M3 칩 탑재 MacBook Air ₩1,590,000부터</span><br>
                <span style="font-size: 19px;"><b>M2 칩 탑재 MacBook Air ₩1,390,000부터</span>
                </p>
            </div>
            <div>
            <div style="text-align: left; background-color:black; padding: 40px 0px; border-radius: 20px;">
            <h1 style="color: white; margin-left: 40px;">이제까지 개인용 컴퓨터에</h1>
            <h1 style="color: white; margin-left: 40px;">탑제된 칩들 중 가장 앞선 칩.</h1>
            <video src="https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/highlights-chips/large.mp4"
                autoplay muted loop></video
            </div>
            <div style="text-align: right; background-color:black;">
            <h1 style="color: white; margin-right: 40px;">타의 추종을 불허하는 프로 노트북</h1>
            <h1 style="color: white; margin-right: 40px;">매력적인 새 컬러 스페이스 블랙.</h1>
            <video src="https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/highlights-connectivity/large.mp4"
                autoplay muted loop></video
            </div>
            </div>
            <div style="background-color: ; text-align: center;">
                <nobr><h1 style="width: auto; font-size:50px; color: gray; margin-right:50%">본격적으로 탐구해 보기.</h1></nobr>
                <br><br><br><br><br><br><br><br><br>
                <nobr><h1 style="font-size:80px; color: white; margin-left: ;">세 발짝 성큼 앞서다.</h1></nobr>
                <br><br>
                <div align="center" style=" font-size:21px; color: gray; text-align:left; margin-left:22%">
                    <span>MacBookPro가 M3, M3 Pro, M3 Max 칩과 함께 훌쩍 도약합니다.</span><br>
                    <span style="color: white;">3나노미터 기술</span>로 제작된 데다 <span style="color: white;">완전히새로운 GPU 아키텍처</span>
                    까지 갖춘 M3<br>
                    시리즈는 이제껏 개발된 PC용 칩들 중 가장 앞선 칩입니다. 세가지 모두 <span style="color: white;">더욱더<br> 
                    프로다운 성능과 역량</span>을 뿜어내죠.
                    </p>
                </div>
                <div style="display:flex; justify-content:center;">
                    <div style="text-align:left;">
                        <img style="padding: 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx__7nkrkdxhdzma_large.jpg" />
                        <h1 style="color:#43b9b9; padding: 50px 60px;  ">8코어 <br>CPU</h1>
                        <h1 style="color:#43b9b9; padding: 50px 60px; ">10코어 <br>GPU</h1>
                        <h1 style="color:#43b9b9; padding: 50px 60px; ">최대 24GB<br>통합 메모리</h1>
                    </div>
                    <div style= "text-align:left;">
                        <img style="padding: 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx_pro__4183istr5f6u_large.jpg" />
                        <h1 style="color: #2997ff; padding: 50px 60px; ">12코어 <br>CPU</h1>
                        <h1 style="color: #2997ff; padding: 50px 60px; ">8코어 <br>CPU</h1>
                        <h1 style="color: #2997ff; padding: 50px 60px; ">8코어 <br>CPU</h1>
                    </div>
                    <div style= "text-align:left;">
                        <img style="padding: 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mx_max__fbgblbhbf6ai_large.jpg" />
                        <h1 style="color:#a972ff; padding: 50px 60px; ">8코어 <br>CPU</h1>
                        <h1 style="color:#a972ff; padding: 50px 60px; ">8코어 <br>CPU</h1>
                        <h1 style="color:#a972ff; padding: 50px 60px; ">8코어 <br>CPU</h1>
                    </div>
                </div>
            </div>
            <div style="background-color: #161617; text-align: center;">
                <br><br><br><br><br><br><br><br><br>
                <nobr><h1 style="font-size:80px; color: #f5f5f7; margin-left: ;">자신에게 맞는 MacBook Pro는?</h1></nobr>
                <br><br>
                <div style="display:flex; justify-content:center;">
                    <div style="text-align:left;">
                        <h1 style="color:#f5f5f7; padding: 0px 60px;  ">MacBook Pro 14</h1><br>
                        <h1 style="color:#78787d; padding: 0px 60px;">M3칩</h1>
                        <img style="padding: 0px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/model_mbp_14_m3__dyengvhazxme_medium.jpg" />
                        <div style="margin-left: 50px; width: 170px; display:flex; justify-content: space-between">
                            <h4 style="color:#77777c;">스페이스 그레이 </h4> 
                            <h4 style="color:#77777c;">실버</h4>
                        </div>
                        <img style="padding: 50px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/icon_mx__ge809jnkz7e6_medium.png" />
                        <h1 style="color:#77777c; padding: 50px 60px;  ">외장 디스플레이 <br>1대 지원</h1>
                        <h1 style="color:#77777c; padding: 50px 60px; ">배터리 사용 시간<br>최대 22시간</h1></h1>
                    </div>
                    <div style= "text-align:left;">
                    <h1 style="color:#f5f5f7; padding: 0px 60px;  ">MacBook Pro 14</h1><br>
                        <h1 style="color:#78787d; padding: 0px 60px;">M3 Pro 또는 M3 Max칩</h1>
                        <img style="padding: 0px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/model_mbp_14_m3_pro_max__0ffc9mzs70i6_medium.jpg" />
                        <div style="margin-left: 50px; width: 170px; display:flex; justify-content: space-between">
                            <h4 style="color:#77777c;">스페이스 블랙 </h4> 
                            <h4 style="color:#77777c;">실버</h4>
                        </div>
                        <img style="padding: 50px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/icon_mx_pro_max__c2k8mrjv4k66_medium.png" />
                        <h1 style="color:#77777c; padding: 50px 60px;  ">외장 디스플레이 <br>최대 2대 도는 4대 지원</h1>
                        <h1 style="color:#77777c; padding: 50px 60px; ">배터리 사용 시간<br>최대 18시간</h1></h1>
                    </div>
                    <div style= "text-align:left;">
                    <h1 style="color:#f5f5f7; padding: 0px 60px;  ">MacBook Pro 16</h1><br>
                        <h1 style="color:#78787d; padding: 0px 60px;">M3 Pro 또는 M3 Max칩</h1>
                        <img style="padding: 0px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/model_mbp_14_m3_pro_max__0ffc9mzs70i6_medium.jpg" />
                        <div style="margin-left: 50px; width: 170px; display:flex; justify-content: space-between">
                            <h4 style="color:#77777c;">스페이스 블랙 </h4> 
                            <h4 style="color:#77777c;">실버</h4>
                        </div>
                        <img style="padding: 50px 50px;"src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/icon_mx_pro_max__c2k8mrjv4k66_medium.png" />
                        <h1 style="color:#77777c; padding: 50px 60px; ">외장 디스플레이 <br>최대 2대 도는 4대 지원</h1>
                        <h1 style="color:#77777c; padding: 50px 60px; ">배터리 사용 시간<br>최대 22시간</h1></h1>
                    </div>
                </div>
                <a href="" style=" padding: 0px 50px; background-color: #0071e3; padding: 11px 41px; border-radius: 20px; text-decoration: none; color: white;">구입하기</a>
        `;
        mainCollectionUl.append(newLi);
    });
    mainCollection.append(mainCollectionUl);
}

//Sub Collection
const subCollection = document.createElement('section');
{
    subCollection.className = 'sub-products';
    const subCollectionUl = document.createElement('ul');
    subCollectionUl.className = 'product-list';
    dbData.subProducts.forEach(product=>{
        let newLi = document.createElement('li');
        newLi.className = 'product'
        newLi.style = `background: url('${product.imgLink}') center center / cover no-repeat;`;
        newLi.innerHTML += `
            <h2 style="color:${product.fontColor}">${product.name}</h2>
            <h3 style="color:${product.fontColor}">${product.info}</h3>
            <div class="links">
                <a href="${product.pageLink}" style="color:${product.linkColor}">더 알아보기></a>
                <a href="${product.orderLink}" style="color:${product.linkColor}">구입하기></a>
            </div>
        `;
        subCollectionUl.append(newLi);
    });
    subCollection.append(subCollectionUl);
}

//Event
const eventElement = document.createElement('section');
{
    eventElement.className = 'event-info';
    eventElement.innerHTML = `
        <p>${dbData.eventText}</p>
    `;
}

//Menu Detail 
const footMenu = document.createElement('section');
{
    footMenu.className = 'foot-menu';
    const subMenuNameArr = [];  //서브 메뉴 제목
    const subMenuArr = [];  //서브 메뉴 <li>

    //서브메뉴 HTML SET
    let imsiString = '';
    subMenuNameArr.push(dbData.mainMenu.name);
    dbData.mainMenu.list.forEach(menu=>{
        imsiString += `<li><a href="${menu.link}">${menu.name}</a></li>`;
    });
    subMenuArr.push(imsiString);
    for(let i=0;i<dbData.subMenu.length ;i++){
        let imsiStr = '';
        subMenuNameArr.push(dbData.subMenu[i].name);
        for(let j=0;j<dbData.subMenu[i].list.length;j++){
            const menu = dbData.subMenu[i].list[j];
            imsiStr+=`<li><a href="${menu.link}">${menu.name}</a></li>`;
        }
        subMenuArr.push(imsiStr);
    }
    const subMenu = document.createElement('nav');
    subMenu.className = 'sub-menu';
    subMenu.innerHTML = `
    <li class="shopDetail">
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="shop-detail">
            ${subMenuArr.shift()}
        </ul>
    </li>
    <li class="serviceAndAccount">
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="services">
            ${subMenuArr.shift()}
        </ul>
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="account">
            ${subMenuArr.shift()}
        </ul>
    </li>
    <li class="storeDetail">
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="store">
            ${subMenuArr.shift()}
        </ul>
    </li>
    <li class="businessAndEducation">
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="business">
            ${subMenuArr.shift()}
        </ul>
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="education">
            ${subMenuArr.shift()}
        </ul>
    </li>
    <li class="thinkAndAppleInfo">
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="think">
            ${subMenuArr.shift()}
        </ul>
        <div class="title">
            <h3>${subMenuNameArr.shift()}</h3>
            <div class="plus-btn"><i class="fas fa-plus"></i></div>
        </div>
        <ul class="apple-info">
            ${subMenuArr.shift()}
        </ul>
    </li>
    `;

    //회사정보 HTML SET
    const footer = document.createElement('footer');
    footer.className = 'footer';
    let siteInfoMenus = '';
    let companyInfoMenus = '';

    dbData.siteInfo.infoList.forEach(info=>{
        siteInfoMenus += `<li><a href="${info.link}">${info.title}</a></li>`;
    });

    dbData.companyInfo.forEach(info => {
        companyInfoMenus += `
            <dt>${info.title}</dt>
            <dd>${info.data}</dd>`;
    });

    footer.innerHTML = `
        <section class="service">
            <p>${dbData.serviceText}</p>
        </section>
        <section class="company">
            <div class="copyright">${dbData.siteInfo.copyright}</div>
            <ul class="notice">
                ${siteInfoMenus}
            </ul>
        </section>
        <span class="line"></span>
        <section class="company-info">
            <dl class="info-list">
                ${companyInfoMenus}
            </dl>
        </section>
    `;

    
    footMenu.append(subMenu,footer);
}

//Append Childs
body.append(header,mainCollection,eventElement,footMenu);

//FontAwesome 추가
const fontawesome = document.createElement('script');
{
    fontawesome.src = 'https://use.fontawesome.com/releases/v5.2.0/js/all.js';
    body.append(fontawesome);
}

//Mobile 메뉴 버튼 클릭시
const menuBtn = document.querySelector('.header > .logo > .list-icon');
menuBtn.addEventListener('click',e=>{
    const header = document.querySelector('.header');
    const menuList = document.querySelector('.header > .menu-list');
    const listIcon = document.querySelector('.header > .logo > .list-icon > svg');

    if(!listIcon.classList.toggle('fa-bars'))
        listIcon.classList.toggle('fa-times');
    
    header.classList.toggle('active');
    menuList.classList.toggle('active');
});

//Mobile 메뉴 디테일 버튼 클릭시
const subMenu = document.querySelector('.foot-menu > .sub-menu');
subMenu.addEventListener('click', e => {
    if(e.target.nodeName === 'H3' || e.target.nodeName === 'svg' || e.target.nodeName === 'path'){
        switch (e.target.nodeName) {
            case 'H3':
                e.target.parentElement.nextElementSibling.classList.toggle('selected');
                return;
            case 'svg':
                e.target.parentElement.parentElement.nextElementSibling.classList.toggle('selected');
                return;
            case 'path':
                e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('selected');
                return;
        }
    }
});

