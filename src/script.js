const $main = document.querySelector('.main');
const $subTitles = $main.querySelectorAll('.line');

const favoriteChampionInfo = [
    { subName: "the emeporor of the sands" , name : 'azir', kda: 3.9, winRate: 66.7, game : 153 },
    { subName: "the rune mage" , name : 'ryze', kda: 4.0, winRate: 64.2, game : 67 },
    { subName: "The Lady of Clockwork" , name : 'orianna', kda: 4.5, winRate: 68.8, game : 64 },
    { subName: "The Deceiver" , name : 'leblanc', kda: 5.8, winRate: 81.8, game : 55 },
    { subName: "The Daring Bombardier" , name : 'corki', kda: 4.7, winRate: 76.5, game : 51 },
    { subName: "The Colossus" , name : 'galio', kda: 4.2, winRate: 60.8, game : 51 },
    { subName: "The Nine-Tailed Fox" , name : 'ahri', kda: 4.2, winRate: 65.3, game : 49 }
]


favoriteChampionInfo.forEach((champ) => {

    /* 챔피언 컨테이너 선택 */
    const $champContainer = document.querySelector('.champ-container');

    const champName = champ.name;
    const champSubName = champ.subName;
    const champWinRate = champ.winRate;
    const champGame = champ.game;
    const champKda = champ.kda;

    /*챔프 이미지 생성*/
    const champInfoTemplate = `<div class="champ-info-container hide"><div class="header-box"><h1>${champName}</h1><h2>"${champSubName}"</h2></div><div class="info-box"><p>GAME ${champGame}</p><p>KDA ${champKda}</p><p>WINRATE ${champWinRate}</p></div></div>`
    const $champBox = document.createElement('div');
    $champBox.classList.add('champ');
    $champBox.classList.add(`${champName}-border`);
    $champBox.classList.add(`${champName}-shortcut`);
    $champBox.innerHTML = champInfoTemplate;
    $champContainer.appendChild($champBox);

    let isChampDetail = false

    /*챔프 이미지 mouseover 클릭 이벤트 */
    $champBox.addEventListener('click', (event) => {
        const $target = event.currentTarget;
        const $champInfo = $target.querySelector('.champ-info-container');
        const allchamp = document.querySelectorAll('.champ');
        if(!isChampDetail){
            isChampDetail = true;
            for(let i = 0; i < allchamp.length; i++) {
                if(allchamp[i] !== $target) {
                    allchamp[i].classList.add('hide');
                }
            };
            $champInfo.classList.remove('hide');
            $target.classList.add('champ-info');
            $target.classList.add(`${champName}-fullcut`);
        }else{
            isChampDetail = false;
            
            $champInfo.classList.add('hide');
            $target.classList.remove('champ-info');
            $target.classList.remove(`${champName}-fullcut`);
            
            for(let i = 0; i < allchamp.length; i++) {
                if(allchamp[i] !== $target) {
                    setTimeout(() => {
                        allchamp[i].classList.remove('hide');
                    }, i * 200);
                }
            };
        }
    });

});

const kdaPerYear = { 2013 : 4, 2014:4.2, 2015 : 5.5, 2016 : 4.3, 2017 : 4.1, 2018 : 3.5, 2019 : 4.1, 2020 : 5.0, 2021 : 3.9, 2022 : 4.1, 2023 : 3.5, 2024 : 5.3 }

for(let year in kdaPerYear) {

    /* 그래프 컨테이너 선택 */
    const $graphContainer = document.querySelector('.bar-section');
    let yearKda = kdaPerYear[year];

    /* 그래프 컨테이너 생성*/
    const $barContainer = document.createElement('div');
    $barContainer.classList.add('bar-container');
    $graphContainer.appendChild($barContainer);
    
    /* 그래프 생성 */
    const $bar = document.createElement('div');
    $bar.classList.add('bar');
    $bar.style.height = `${yearKda * 15}%`;
    $barContainer.appendChild($bar);
    
    /* 연도 표시 생성 */
    const $barSeason = document.createElement('p');
    $barSeason.innerHTML = year
    $barContainer.appendChild($barSeason);

};

const historyData = [
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
    { 
        year : 2013, 
        scene : [
            {url : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
            {url : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
            {url : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
        ]
    },
]

// historyData.forEach((history) => {
    
//     /* 히스토리 컨테이너 선택 */
//     const $historyContainer = document.querySelector('.history-container');
//     const year = history.year;
//     const scenes = history.scene;

//     /* 히스토리 컨테이너 생성 */
//     const $seasonHistory = document.createElement('div');
//     $seasonHistory.classList.add('season-history');
//     $seasonHistory.classList.add('section-margin');
//     $seasonHistory.id = year;
//     $historyContainer.appendChild($seasonHistory);

//     /* 헤더 생성 */
//     const $header = document.createElement('h1');
//     $header.innerHTML = `SEASON ${year}`;
//     $seasonHistory.appendChild($header);

//      /* 히스토리 이너 생성 */
//      const $historyInner = document.createElement('div');
//      $historyInner.classList.add('history-inner');
//      $historyInner.classList.add('flex');
//      $historyInner.classList.add('c-c');
//      $seasonHistory.appendChild($historyInner);

//     /* 하이라이트 컨테이너 생성 */
//     const $hilightContainer = document.createElement('div');
//     $hilightContainer.classList.add('hilight-container');
//     $hilightContainer.classList.add('section-margin');
//     $historyInner.appendChild($hilightContainer);

//     /* 하이라이트 캐러셀 박스 생성 */
//     const $hilightCarouselContainer = document.createElement('div');
//     $hilightCarouselContainer.classList.add('hilight-inner');
//     $hilightCarouselContainer.classList.add('flex');
//     $hilightContainer.appendChild($hilightCarouselContainer);

//     /* 하이라이트 캐러셀 생성 */
//     scenes.forEach((scene) => {

//         const urlPath = scene.url;
//         const team = scene.team;
//         const month = scene.month;
//         const day = scene.day;
//         const year = history.year;

//         const template = `
//         <div class="hilight-scene flex column c-c">
//             <div class="video-box flex c-c">
//                 <video src="${urlPath}"></video>
//             </div>
//             <div class="scene-info">
//                 <p>VS <span>${team}</span></p>
//                 <p>${year} <span>${month}</span> ${day}</p>
//             </div>
//         </div> `

//         $hilightCarouselContainer.innerHTML += template;
//     });

//     /* 하이라이트 캐러셀 버튼 박스 생성 */
//     const $hilightBtnContainer = document.createElement('div');
//     $hilightBtnContainer.classList.add('hilight-btn-container');
//     $hilightContainer.appendChild($hilightBtnContainer);

//     /* 하이라이트 캐러셀 버튼 생성 */
//     const $hilightBtnTemplate = 
//     `<div class="hilight-btn-container flex j-b">
//         <button>left</button>
//         <button>right</button>
//     </div>`
//     $hilightBtnContainer.innerHTML = $hilightBtnTemplate;

//     /* 섹션 라인 삽입 */
//     const $line = document.createElement('div');
//     $line.classList.add('section-line');
//     $line.classList.add('section-margin');
//     $seasonHistory.appendChild($line);
// });