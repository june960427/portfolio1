/*** 전체 데이터 ***/
let data = {
    favoriteChampInfo : [
        { subName: "the emeporor of the sands" , name : 'azir', kda: 3.9, winRate: 66.7, game : 153 },
        { subName: "the rune mage" , name : 'ryze', kda: 4.0, winRate: 64.2, game : 67 },
        { subName: "The Lady of Clockwork" , name : 'orianna', kda: 4.5, winRate: 68.8, game : 64 },
        { subName: "The Deceiver" , name : 'leblanc', kda: 5.8, winRate: 81.8, game : 55 },
        { subName: "The Daring Bombardier" , name : 'corki', kda: 4.7, winRate: 76.5, game : 51 },
        { subName: "The Colossus" , name : 'galio', kda: 4.2, winRate: 60.8, game : 51 },
        { subName: "The Nine-Tailed Fox" , name : 'ahri', kda: 4.2, winRate: 65.3, game : 49 }
    ],
    kdaPerYear : { 2013 : 4, 2014:4.2, 2015 : 5.5, 2016 : 4.3, 2017 : 4.1, 2018 : 3.5, 2019 : 4.1, 2020 : 5.0, 2021 : 3.9, 2022 : 4.1, 2023 : 3.5, 2024 : 5.3 },
    historyData :  [
        { 
            year : 2013,
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {summer : 'champion', words : 'champion'}
            },
            scene : [
                {imgPath : "/src/img/nidalee.png" , VideoPath : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
                {imgPath : "/src/img/zed.png" , VideoPath : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
                {imgPath : "/src/img/riven.png" , VideoPath : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
            ]
        },
    ]
}


/*** 메인 영역 ***/

/* 메인 영역 에니메이션 */
window.addEventListener('DOMContentLoaded', ()=> {
    const $main = document.querySelector('.main');
    const $subTitles = $main.querySelectorAll('.line');
    const $mainImg = $main.querySelector('.main-img');
    const $mainLogo = $main.querySelector('.mid-logo');
    const $mainTitle = $main.querySelector('.main-title');

    for (let i = 0; i < $subTitles.length; i++) {
        setTimeout(() => {
            $subTitles[i].style.transform = 'translateX(0%)';
            $subTitles[i].style.opacity = 1;
            $subTitles[i].style.width = '100%';
        }, i * 100);
    };

    setTimeout(() => {
        $mainImg.style.filter = 'brightness(90%)';
        $mainLogo.style.filter = 'brightness(90%)';
    }, 300);

    setTimeout(() => {
        $mainTitle.style.transform = 'translateY(0%)';
    }, 700);

});

const newElement = (element, classList = '') => {
    const $element = document.createElement(element);
    if (classList) {
        classList.split(' ').forEach(className => { 
            $element.classList.add(className); 
        });
    }
    
    return $element;
};

/*** 커리어 영역 ***/
const favoriteChampionInfo = data.favoriteChampInfo;
favoriteChampionInfo.forEach((champ) => {
    const $champContainer = document.querySelector('.champ-container');
    const champInfoTemplate = `
    <div class="champ-info-container hide">
        <div class="header-box">
            <h1>${champ.name}</h1>
            <h2>"${champ.subName}"</h2>
        </div>
        <div class="info-box">
            <p>GAME ${champ.game}</p>
            <p>KDA ${champ.kda}</p>
            <p>WINRATE ${champ.winRate}%</p>
        </div>
    </div>`;

    /*챔프 이미지 생성*/
    const $champBox = newElement('div', `champ ${champ.name}-shortcut`);
    $champBox.setAttribute('data-champ', champ.name);
    $champBox.innerHTML = champInfoTemplate;
    $champContainer.appendChild($champBox);
});

/* 챔프 이미지 클릭 이벤트 */
const $champContainer = document.querySelector('.champ-container');
$champContainer.addEventListener('click', (event) => {
    const $target = event.target.closest('.champ');

    if ($target) {
        const champName = $target.getAttribute('data-champ');
        const $champInfo = $target.querySelector('.champ-info-container');
        const allChamps = document.querySelectorAll('.champ');

        $target.style.width = ''
        $target.classList.toggle('champ-info');
        $target.classList.toggle(`${champName}-fullcut`);
        $champInfo.classList.toggle('hide');

        allChamps.forEach(($champ, i) => {
            if ($champ !== $target) {
                setTimeout(() => {
                    $champ.classList.toggle('hide');
                }, i * 100);
            }
        });
    }
});

const kdaPerYear = data.kdaPerYear;
const $graphContainer = document.querySelector('.bar-section');
for(let year in kdaPerYear) {
    let yearKda = kdaPerYear[year];

    /* 그래프 컨테이너 생성*/
    const $barContainer = newElement('div','bar-container');
    $graphContainer.appendChild($barContainer);
    
    /* 그래프 생성 */
    const $bar = newElement('div', 'bar');
    $bar.setAttribute('data-height',`${yearKda * 15}%`);
    $barContainer.appendChild($bar);
    
    /* 연도 표시 생성 */
    const $barSeason = newElement('p');
    $barSeason.textContent = year;
    $barContainer.appendChild($barSeason);
}

/* 커리어 영역 애니메이션 */
const chmapContainerAnimation = () => {
    const $champContainer = document.querySelector('.champ-main');
    const $allChamp = $champContainer.querySelectorAll('.champ');
    $champContainer.style.width = '100%';
    
    for(let i = 0; i < $allChamp.length; i++) {
        const champName = $allChamp[i].getAttribute('data-champ');
        setTimeout(() => {
            $allChamp[i].classList.add(`${champName}-border`);
            $allChamp[i].style.width = '13%';
        }, i * 250);
    };
};

const barAnimation = () => {
    const $bar = document.querySelectorAll('.bar');
    for(let i = 0; i < $bar.length; i++){
        const height = $bar[i].getAttribute('data-height');
        setTimeout(() => {
            $bar[i].style.height = `${height}`
        }, i * 120);
    };
};

const careerAnimation = () => {
    const $career = document.querySelector('.career');
    const $mainImg2 = $career.querySelector('img');
    const $bacgkround = $career.querySelectorAll('.bg-inner');
    const $animationElements = [$mainImg2, ...$bacgkround]; 

    for(let i = 0; i < $animationElements.length; i++){
        $animationElements[i].style.filter = 'brightness(100%)';
    };
    setTimeout(() => {
        $career.style.filter = 'drop-shadow(0px -10px 20px #696868)'
    }, 550);
};

const observerOption = {
    root : null,
    rootMargin : '0px',
    threshold : 0.7
}

const observerAnimation ={
    'champ-main' : chmapContainerAnimation,
    'bar-section' : barAnimation,
    'career' : careerAnimation
}

const callback = (entries, observer) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const $target = entry.target.classList[0];
            if(observerAnimation[$target]){
                observerAnimation[$target]();
                observer.unobserve(entry.target);
            };
        };
    });
};

const observer = new IntersectionObserver(callback,observerOption);
const $targets = document.querySelectorAll('.champ-main, .bar-section, .career');
$targets.forEach(($target) => {
    observer.observe($target);
});

/*** 히스토리 영역 ***/
const historyData = data.historyData

const makeInfo = (parent, data) => {
    const $ul = newElement('ul');
    parent.appendChild($ul);

    for(let key in data) {
        const value = data[key]; 
        const liInnerTemplate = `<p>${key}</p><P>${value}</P>`
        const $li = newElement('li');
        $li.innerHTML = liInnerTemplate;
        $ul.appendChild($li);
    };
};

// const $historyContainer = document.querySelector('.history-container');
// historyData.forEach((history,index) => {
    
//     /* 연도별 컨테이너 생성 */
//     const $historyInner = newElement('div', 'history-inner flex');
//     $historyInner.id = `season${history.year}`;
//     $historyContainer.appendChild($historyInner);

//     /* 컨테이너 백그라운드 생성 */
//     const $innerBackground = newElement('div', 'inner-background');
//     $innerBackground.style.backgroundImage = `url(${history.scene[0].imgPath})`;
//     $innerBackground.style.width = '100%';
//     $innerBackground.style.filter = 'drop-shadow(0px -10px 5px #dd012d)'
//     $historyInner.appendChild($innerBackground);
    
//     /* 좌측 정보 섹션 생성 */
//     const $hisoryInfo = newElement('div', 'history-section side-section flex a-c');
//     $historyInner.appendChild($hisoryInfo);
    
//     /* 좌측 정보 컨테이너 생성 */
//     const $historyInfoContainer = newElement('div', 'history-info-container flex column j-b');
//     $hisoryInfo.appendChild($historyInfoContainer);

//     /* 좌측 정보 헤더 생성 */
//     const headerInnerTemplate = `<div class="header-line"></div><H1>SEASON INFO</H1>`
//     const $header = newElement('div', 'header');
//     $header.innerHTML = headerInnerTemplate;
//     $historyInfoContainer.appendChild($header);

//     /* 좌측 정보 생성 */
//     makeInfo($historyInfoContainer, history.seasoninfo.indicator);
//     makeInfo($historyInfoContainer, history.seasoninfo.ranking);

//     /* 메인 섹션 생성 */
//     const $mainSection = newElement('div', 'main-section flex column a-c j-b');
//     $historyInner.appendChild($mainSection);

//     /* 메인 헤더 생성 */
//     const mainHeaderInnerTemplate = `season ${history.year} <br><span>Hilight</span>`
//     const $mainHeader = newElement('h1');
//     $mainHeader.innerHTML = mainHeaderInnerTemplate;
//     $mainSection.appendChild($mainHeader);

//     /* 메인 비디오 캐러셀 생성 */
//     const $videoContainer = newElement('div', 'video-carousel flex');
//     $mainSection.appendChild($videoContainer);

//     /* 비디오 생성 */ 
//     history.scene.forEach((scene, index) => {
//         const videoInnerTemplate = `<video controls src = ${scene.VideoPath}></video><div class="video-info"><p>Vs <span>${scene.team}</span></p><p>${history.year} ${scene.month} ${scene.day}</p></div>`
//         const $videoCarousel = newElement('div', 'video-inner');
//         $videoCarousel.setAttribute('data-video-index', index);
//         $videoCarousel.innerHTML = videoInnerTemplate;
//         $videoContainer.appendChild($videoCarousel);
//     });

//     /* 캐러셀 버튼 컨테이너 생성 */
//     const $btnContainer = newElement('div', 'carousel-btn-container flex j-b a-e');
//     $mainSection.appendChild($btnContainer);

//     /* 캐러셀 버튼 생성 */
//     history.scene.forEach((scene, index) => {
//         const $btn = newElement('button', 'carousel-btn');
//         $btn.setAttribute('data-video-index', index);
//         $btn.innerHTML = `<p>SCENE ${index}</p>`
//         $btnContainer.appendChild($btn);
//     });

//     /* 버튼 클릭 이벤트 */
//     $historyContainer.addEventListener('click', (event) => {
//     const $btn = event.target.closest('.carousel-btn');
//     if ($btn) {
//         console.log(event.target);
//         const targetIndex = $btn.getAttribute('data-video-index');
//         const $videoContainer = document.querySelector(`.video-inner[data-video-index="${targetIndex}"]`);
//         const $video = $videoContainer.querySelector('video');
//         $videoContainer.scrollIntoView({inline: "start", block: "nearest", behavior: "smooth"});
//         $video.currentTime = 0;
//         $video.play();

//         /* 백그라운드 이미지 애니메이션 */
//         const $innerBackground = $btn.closest('.history-inner').querySelector('.inner-background');
//         $innerBackground.classList.remove('inner-background-active');
//         $innerBackground.style.width = '';
//         $innerBackground.style.filter = '';
//         setTimeout(() => {
//             $innerBackground.style.backgroundImage = `url(${history.scene[targetIndex].imgPath})`;
//             $innerBackground.classList.add('inner-background-active');
//         }, 500);
//     };

// });
//     /* 우측 더미 섹션 생성 */
//     const $dummySection = newElement('div', 'background-section side-section flex j-e');
//     $historyInner.appendChild($dummySection);
// });
