const $main = document.querySelector('.main');
const $subTitles = $main.querySelectorAll('.line');

const newElement = (element, classList = '') => {
    const $element = document.createElement(element);
    if (classList) {
        classList.split(' ').forEach(className => { 
            $element.classList.add(className); 
        });
    }

    return $element;
}

const favoriteChampionInfo = [
    { subName: "the emeporor of the sands" , name : 'azir', kda: 3.9, winRate: 66.7, game : 153 },
    { subName: "the rune mage" , name : 'ryze', kda: 4.0, winRate: 64.2, game : 67 },
    { subName: "The Lady of Clockwork" , name : 'orianna', kda: 4.5, winRate: 68.8, game : 64 },
    { subName: "The Deceiver" , name : 'leblanc', kda: 5.8, winRate: 81.8, game : 55 },
    { subName: "The Daring Bombardier" , name : 'corki', kda: 4.7, winRate: 76.5, game : 51 },
    { subName: "The Colossus" , name : 'galio', kda: 4.2, winRate: 60.8, game : 51 },
    { subName: "The Nine-Tailed Fox" , name : 'ahri', kda: 4.2, winRate: 65.3, game : 49 }
]


// favoriteChampionInfo.forEach((champ) => {

//     /* 챔피언 컨테이너 선택 */
//     const $champContainer = document.querySelector('.champ-container');

//     const champName = champ.name;
//     const champSubName = champ.subName;
//     const champWinRate = champ.winRate;
//     const champGame = champ.game;
//     const champKda = champ.kda;

//     /*챔프 이미지 생성*/
//     const champInfoTemplate = `<div class="champ-info-container hide"><div class="header-box"><h1>${champName}</h1><h2>"${champSubName}"</h2></div><div class="info-box"><p>GAME ${champGame}</p><p>KDA ${champKda}</p><p>WINRATE ${champWinRate}%</p></div></div>`
//     const $champBox = newElement('div', `champ ${champName}-border ${champName}-shortcut`);
//     $champBox.innerHTML = champInfoTemplate;
//     $champContainer.appendChild($champBox);

//     /*챔프 이미지 상태 플래그*/
//     let isChampDetail = false

//     /*챔프 이미지 mouseover 클릭 이벤트 */
//     $champBox.addEventListener('click', (event) => {
//         const $target = event.currentTarget;
//         const $champInfo = $target.querySelector('.champ-info-container');
//         const allchamp = document.querySelectorAll('.champ');

//         if(!isChampDetail){
//             isChampDetail = true;
//             for(let i = 0; i < allchamp.length; i++) {
//                 if(allchamp[i] !== $target) {
//                     allchamp[i].classList.add('hide');
//                 }
//             };
//             $champInfo.classList.remove('hide');
//             $target.classList.add('champ-info');
//             $target.classList.add(`${champName}-fullcut`);
//         }else{
//             isChampDetail = false;
            
//             $champInfo.classList.add('hide');
//             $target.classList.remove('champ-info');
//             $target.classList.remove(`${champName}-fullcut`);
            
//             for(let i = 0; i < allchamp.length; i++) {
//                 if(allchamp[i] !== $target) {
//                     setTimeout(() => {
//                         allchamp[i].classList.remove('hide');
//                     }, i * 200);
//                 }
//             };
//         }
//     });

// });

// const kdaPerYear = { 2013 : 4, 2014:4.2, 2015 : 5.5, 2016 : 4.3, 2017 : 4.1, 2018 : 3.5, 2019 : 4.1, 2020 : 5.0, 2021 : 3.9, 2022 : 4.1, 2023 : 3.5, 2024 : 5.3 }

// for(let year in kdaPerYear) {

//     /* 그래프 컨테이너 선택 */
//     const $graphContainer = document.querySelector('.bar-section');
//     let yearKda = kdaPerYear[year];

//     /* 그래프 컨테이너 생성*/
//     const $barContainer = newElement('div','bar-container');
//     $graphContainer.appendChild($barContainer);
    
//     /* 그래프 생성 */
//     const $bar = newElement('div', 'bar');
//     $bar.style.height = `${yearKda * 15}%`;
//     $barContainer.appendChild($bar);
    
//     /* 연도 표시 생성 */
//     const $barSeason = newElement('p');
//     $barSeason.innerHTML = year
//     $barContainer.appendChild($barSeason);
// }

// const historyData = [
//     { 
//         year : 2013,
//         seasoninfo:{
//             indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
//             ranking : {summer : 'champion', words : 'champion'}
//         },
//         scene : [
//             {imgPath : "/src/img/nidalee.png" , VideoPath : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4", team : 'CJ BLAZE', month : 'April', day: '6th'},   
//             {imgPath : "/src/img/zed.png" , VideoPath : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4", team : 'KT ROLSTERS', month : 'august', day: '31st'},   
//             {imgPath : "/src/img/riven.png" , VideoPath : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4", team : 'tsm', month : 'september', day: '21st'},   
//         ]
//     }
// ]

// historyData.forEach((history) => {

//     /* history 컨테이너 선택 */
//     const $historyContainer = document.querySelector('.history-container');
    
//     const year = history.year;
//     const seasoninfo = history.seasoninfo;
//     const scenes = history.scene;
    
//     /* 연도별 컨테이너 생성 */
//     const $historyInner = newElement('div', 'history-inner flex');
//     $historyInner.id = `season${year}`;
//     $historyContainer.appendChild($historyInner);
    
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
//     const $topInfoUl = newElement('ul');
//     $historyInfoContainer.appendChild($topInfoUl);

//         /* 상단 정보 생성 */ 
//         const topInfoData = seasoninfo.indicator;
//         for(let key in topInfoData) {
//             const value = topInfoData[key]; 
//             const liInnerTemplate = `<p>${key}</p><P>${value}</P>`
//             const $li = newElement('li');
//             $li.innerHTML = liInnerTemplate;
//             $topInfoUl.appendChild($li);
//         }
        
//         /* 하단 정보 생성 */ 
//     const $bottomInfoUl = newElement('ul');
//     $historyInfoContainer.appendChild($bottomInfoUl);

//     const bottomInfoData = seasoninfo.ranking;
//     for(let key in bottomInfoData) {
//         const value = bottomInfoData[key]; 
//         const liInnerTemplate = `<p>${key}</p><P>${value}</P>`
//         const $li = newElement('li');
//         $li.innerHTML = liInnerTemplate;
//         $bottomInfoUl.appendChild($li);
//     }

//     /* 메인 섹션 생성 */
//     const $mainSection = newElement('div', 'main-section flex column a-c j-b');
//     $historyInner.appendChild($mainSection);

//     /* 메인 헤더 생성 */
//     const mainHeaderInnerTemplate = `season ${year} <br><span>Hilight</span>`
//     const $mainHeader = newElement('h1');
//     $mainHeader.innerHTML = mainHeaderInnerTemplate;
//     $mainSection.appendChild($mainHeader);

//     /* 메인 비디오 캐러셀 생성 */
//     const $videoContainer = newElement('div', 'video-container flex');
//     $mainSection.appendChild($videoContainer);

//     /* 비디오 생성 */ 
//     scenes.forEach((scene, index) => {
//         const videoInnerTemplate = `<video src = ${scene.VideoPath}></video><div class="video-info"><p>Vs <span>${scene.team}</span></p><p>${year} ${scene.month} ${scene.day}</p></div>`
//         const $videoCarousel = newElement('div', 'video-carousel');
//         $videoCarousel.setAttribute('dataset-video-index', index);
//         $videoCarousel.innerHTML = videoInnerTemplate;
//         $videoContainer.appendChild($videoCarousel);
//     });

//     /* 캐러셀 버튼 컨테이너 생성 */


//     /* 우측 백그라운드 섹션 생성 */
//     const $backgroundSection = newElement('div', 'background-section side-section flex a-e');
//     $historyInner.appendChild($backgroundSection);

//     /* 백그라운드 이미지 생성 */
//     const $backgroundImg = newElement('div', 'background-img');
//     $backgroundSection.appendChild($backgroundImg);


// });