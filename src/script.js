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
            seasonchamp : [
                {
                    chmapname : 'ahri', kda : 5, champimg : '/src/img/ahri-port.jpg', winrate : 89.1
                },
                {
                    chmapname : 'riven', kda : 6, champimg : '/src/img/riven-port.jpg', winrate : 100
                },
                {
                    chmapname : 'orianna', kda : 5.3, champimg : '/src/img/orianna-port.jpg', winrate : 100
                },
                {
                    chmapname : 'gragas', kda : 4.6, champimg : '/src/img/gragas-port.jpg', winrate : 100
                },
                {
                    chmapname : 'zed', kda : 4.9, champimg : '/src/img/zed-port.jpg', winrate : 90.1
                },
            ],
            teaminfo :  { top : 'impact', jungle : 'bengi', mid : 'faker', ad : 'piglet', sup : 'poomandoo'},
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {summer : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/nidalee.jpg' , VideoPath : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4"},
                    dateinfo: {team : 'CJ BLAZE', month : 'April', day: '6th'},
                    matchinfo: {chmap: 'nidalee', win: 'win', kda: 3.9, killpart: '87.6%'}
                
                },   
                {
                    src: {imgPath : '/src/img/zed.jpg' , VideoPath : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4"},
                    dateinfo: {team : 'kt rolsters', month : 'agust', day: '31st'},
                    matchinfo: {chmap: 'zed', win: 'win', kda: 2.2, killpart: '50%'}
                
                },   
                {
                    src: {imgPath : '/src/img/riven.jpg' , VideoPath : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4"},
                    dateinfo: {team : 'tsm', month : 'soptember', day: '21st'},
                    matchinfo: {chmap: 'riven', win: 'win', kda: 3.7, killpart: '65%'}
                
                } 
            ]
        },
        { 
            year : 2014,
            seasonchamp : [
                {
                    chmapname : 'ahri', kda : 5, champimg : '/src/img/ahri-port.jpg', winrate : 89.1
                },
                {
                    chmapname : 'riven', kda : 6, champimg : '/src/img/riven-port.jpg', winrate : 100
                },
                {
                    chmapname : 'orianna', kda : 5.3, champimg : '/src/img/orianna-port.jpg', winrate : 100
                },
                {
                    chmapname : 'gragas', kda : 4.6, champimg : '/src/img/gragas-port.jpg', winrate : 100
                },
                {
                    chmapname : 'zed', kda : 4.9, champimg : '/src/img/zed-port.jpg', winrate : 90.1
                },
            ],
            teaminfo :  { top : 'impact', jungle : 'bengi', mid : 'faker', ad : 'piglet', sup : 'poomandoo'},
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {summer : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/nidalee.jpg' , VideoPath : "https://i.namu.wiki/i/vY45t4HLpGoHt_FIVb6GXLGrd4JUNx72QdyGGkvO2TAqVG1afCl_F_n_NTnbPSWsDUI44c8BaAtAEfMYmPJptw.mp4"},
                    dateinfo: {team : 'CJ BLAZE', month : 'April', day: '6th'},
                    matchinfo: {chmap: 'nidalee', win: 'win', kda: 3.9, killpart: '87.6%'}
                
                },   
                {
                    src: {imgPath : '/src/img/zed.jpg' , VideoPath : "https://i.namu.wiki/i/iixog3Ad2XOYrj96ZLkQo-9t-EQqcc1m-7okQPRT_oUub_VnssIPP--31WeOnBRfcTjzEjoIMb0JplVpmSoaGA.mp4"},
                    dateinfo: {team : 'kt rolsters', month : 'agust', day: '31st'},
                    matchinfo: {chmap: 'zed', win: 'win', kda: 2.2, killpart: '50%'}
                
                },   
                {
                    src: {imgPath : '/src/img/riven.jpg' , VideoPath : "https://i.namu.wiki/i/uROhcO0Uw_3Leez42L9-dgcv-TLSCvyQa_MQLL2LLfhjjvNjijmoCQ0fXRnN7mcp4l8ugSxMElpX-lN9QRvqdA.mp4"},
                    dateinfo: {team : 'tsm', month : 'soptember', day: '21st'},
                    matchinfo: {chmap: 'riven', win: 'win', kda: 3.7, killpart: '65%'}
                
                } 
            ]
        },
    ]
}

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
    $champBox.insertAdjacentHTML('beforeend', champInfoTemplate);
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

/* 메인 영역 애니메이션 */

const mainAnimation = () => {
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
};


/* 커리어 영역 애니메이션 */
const chmapContainerAnimation = () => {
    const $champContainer = document.querySelector('.champ-main');
    const $allChamp = $champContainer.querySelectorAll('.champ');

    setTimeout(() => {
        $champContainer.style.width = '100%';
        for(let i = 0; i < $allChamp.length; i++) {
            const champName = $allChamp[i].getAttribute('data-champ');
            setTimeout(() => {
                $allChamp[i].classList.add(`${champName}-border`);
                $allChamp[i].style.width = '13%';
            }, i * 250);
        };
    }, 500);
    
};

const barAnimation = () => {
    const $bar = document.querySelectorAll('.bar');
    setTimeout(() => {
        for(let i = 0; i < $bar.length; i++){
            const height = $bar[i].getAttribute('data-height');
            setTimeout(() => {
                $bar[i].style.height = `${height}`
            }, i * 120);
        };
    }, 500);
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
        $career.style.filter = 'drop-shadow(0px -15px 15px #696868)'
    }, 550);
};

/* 하이라이트 영역 애니메이션 */

const highlightAnimation = () => {
    const $historyNav = document.querySelector('.carousel-nav');
    const $hilightContainer = document.querySelector('.history-carousel-container');
    const $video = $hilightContainer.querySelector('video');
    $historyNav.classList.remove('hide');
    $hilightContainer.classList.add('history-carousel-animate');
    setTimeout(() => {
        $video.play();
    }, 1000);
};

/* 옵저버 옵션 */
const observerOption = {
    root : null,
    rootMargin : '0px',
    threshold : 0.7
}

const observerAnimation ={
    'main' : mainAnimation,
    'champ-main' : chmapContainerAnimation,
    'bar-section' : barAnimation,
    'career' : careerAnimation,
    'history-carousel-container' : highlightAnimation,
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
const $targets = document.querySelectorAll('.main, .champ-main, .bar-section, .career, .history-carousel-container');
$targets.forEach(($target) => {
    observer.observe($target);
});

/*** 히스토리 영역 ***/


const historyData = data.historyData
const $historyCarousel = document.querySelector('.history-carousel-container');

const makeInfo = (parent, data) => {
    const $info = newElement('div', 'info');
    parent.appendChild($info);
    const $ul = newElement('ul');
    
    for(let key in data) {
        const value = data[key]; 
        const liInnerTemplate = `<p>${key}</p><P>${value}</P>`
        const $li = newElement('li');
        $li.insertAdjacentHTML('beforeend', liInnerTemplate);
        $ul.appendChild($li);
    };

    $info.appendChild($ul);
};

const containerHeaderTemplate = (header1, header2) => {
    return `<div class="container-header"><div class="header-line"></div><p>${header1}</p><p>${header2}</p></div>`
};

const btnClickEvent = ($anmiationContainers,datArr, videoIndex) => {
    $anmiationContainers.forEach((container) => {
        container.classList.toggle('activate');
        [...container.children].forEach((child) => {
            child.classList.toggle('opacity-activate');
        });

        setTimeout(() => {   
            if(container.classList[0] === 'match-info-inner'){
                const $bacgkround = container.querySelector('.background');
                $bacgkround.style.backgroundImage = `url('${datArr.scene[videoIndex].src.imgPath}')`;
            }
            container.classList.toggle('activate');
            [...container.children].forEach((child) => {
                child.classList.toggle('opacity-activate');
            });
        }, 750);
    });
};

historyData.forEach((history) => {

    /* 연도별 컨테이너 생성 */
    const $historyMain = newElement('div', 'history-main flex');
    $historyMain.id = `season${history.year}`
    $historyCarousel.appendChild($historyMain);

    const $headerContainer = newElement('div', 'header-container');
    const headerInnerTemplate = `
        <div class="header-inner inner-padding">
            <div class="header inner-bg flex column j-c">
                <h1><span>Season</span> <br>${history.year}</h1>
            </div>
        </div>

        <div class="header-inner inner-padding">
            <div class="team-info inner-bg flex c-c">
                <img src="src/img/t1-logo.png" alt="">
            </div>
        </div>`
    $headerContainer.insertAdjacentHTML('beforeend',headerInnerTemplate); 
    $historyMain.appendChild($headerContainer);

    const $teamintroContainer = newElement('div', 'team-introduce inner-padding');
    $headerContainer.appendChild($teamintroContainer);

    const $teamintroInner = newElement('div', 'team-introduce-inner inner-bg');
    $teamintroInner.insertAdjacentHTML('beforeend',containerHeaderTemplate('Team', 'introduce')); 
    makeInfo($teamintroInner,history.teaminfo);

    $teamintroContainer.appendChild($teamintroInner);

    const $seasonImgContainer = `
    <div class="season-img-container inner-padding">
        <div class="season-img inner-bg flex column j-b">
            <div class="container-header">
                <div class="header-line"></div>
                <p>Season</p>
                <p>2013</p>
            </div>
        </div>
    </div>`
    $headerContainer.insertAdjacentHTML('beforeend', $seasonImgContainer);

    const $videoContainer = newElement('div', 'video-container');
    $historyMain.appendChild($videoContainer);

    const $videoMain = newElement('div', 'video-main');
    $videoContainer.appendChild($videoMain);

    const $videoInner = `
    <div class="video-inner-container inner-padding">
        <div class="video inner-bg flex a-c">
            <video controls src=${history.scene[0].src.VideoPath}></video>
        </div>
    </div>`
    $videoMain.insertAdjacentHTML('beforeend', $videoInner);

    const btnContainerInnerTemplate = `
    <div class="button-container flex">

        <div class="button-inner inner-padding flex j-e">
            <button class="button inner-bg flex a-c" data-side = "prev">
                <div class="info">
                    <p><i class="fa-solid fa-arrow-left"></i></p>
                </div>
                <div class="container-header flex column a-e">
                    <div class="header-line"></div>
                    <p>prev</p>
                    <p>Hilight</p>
                </div>
            </button>
        </div>
    
        <div class="button-inner inner-padding">
            <button class="button inner-bg flex a-c" data-side = "next">
                <div class="container-header flex column a-s">
                    <div class="header-line"></div>
                    <p>next</p>
                    <p>Hilight</p>
                </div>
                <div class="info">
                    <p><i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </button>
        </div>
    </div>
`
    $videoMain.insertAdjacentHTML('beforeend', btnContainerInnerTemplate);

    let videoIndex = 0;

    /* 버튼 클릭 이벤트 */
    const $btnContainer = $videoMain.querySelector('.button-container');
    $btnContainer.addEventListener('click', (event) => {
        const target = event.target.closest('.button');
        const targetAttr = target.getAttribute('data-side');
        const video = $videoMain.querySelector('video');
        const $anmiationContainers = $videoMain.querySelectorAll(`.${target.classList[0]}[data-side=${targetAttr}], .video, .match-info-inner`);
        
        if(target){
            if(targetAttr === 'prev' &&  1 <= videoIndex){
                videoIndex--
                btnClickEvent($anmiationContainers,history, videoIndex);
                video.src = history.scene[videoIndex].src.VideoPath;
                setTimeout(() => {
                    video.play();
                }, 1200);
            }
            else if(targetAttr === 'next' && videoIndex < history.scene.length-1){
                videoIndex++
                btnClickEvent($anmiationContainers,history, videoIndex);
                video.src = history.scene[videoIndex].src.VideoPath;
                setTimeout(() => {
                    video.play();
                }, 1200);
            }
        }
    });

    const $matchInfoContainer = newElement('div', 'match-info-container inner-padding flex j-e');
    $videoMain.appendChild($matchInfoContainer);

    const $matchInfoInner = newElement('div', 'match-info-inner inner-bg flex column j-b');
    $matchInfoContainer.appendChild($matchInfoInner);
    $matchInfoInner.insertAdjacentHTML(
        'beforeend',
        `<div class="background inner-bg" style="background-image:url('${history.scene[0].src.imgPath}')"></div> ${containerHeaderTemplate('Match', 'info')}`
    );
    const infoInnerTemplate = `
    <div class="info">
        <ul>
            <li>
                <p>date</p>
                <p><span>${history.scene[0].dateinfo.month}</span> ${history.scene[0].dateinfo.day}</p>
            </li>
            <li>
                <p>team</p>
                <p>vs <span>${history.scene[0].dateinfo.team}</span></p>
            </li>
        </ul>
    </div>`
    $matchInfoInner.insertAdjacentHTML('beforeend', infoInnerTemplate);
    makeInfo($matchInfoInner, history.scene[0].matchinfo);

    const $historySeasonInfoContainer = newElement('div', 'history-season-info-container');
    $historyMain.appendChild($historySeasonInfoContainer);

    const $seasonInfoContainer = newElement('div', 'season-info-container inner-padding');
    $historySeasonInfoContainer.appendChild($seasonInfoContainer);

    const $seasonInfo = newElement('div', 'season-info inner-bg flex column j-b');
    $seasonInfo.insertAdjacentHTML('beforeend', containerHeaderTemplate('Season', 'info'));
    makeInfo($seasonInfo, history.seasoninfo.indicator);
    makeInfo($seasonInfo, history.seasoninfo.ranking);
    $seasonInfoContainer.appendChild($seasonInfo);

    const $seasonchampContainer = newElement('div', 'season-champ-container inner-padding');
    $historySeasonInfoContainer.appendChild($seasonchampContainer);
    
    const $seasonchamp = newElement('div', 'season-champ inner-bg');
    $seasonchamp.insertAdjacentHTML('beforeend', containerHeaderTemplate('Season', 'champ'));
    $seasonchampContainer.appendChild($seasonchamp);

    const $info = newElement('div', 'info');
    $seasonchamp.appendChild($info);

    const $table = newElement('table');
    $info.appendChild($table);

    const $thead = newElement('thead');
    $thead.insertAdjacentHTML(
        'beforeend',
        '<td></td><td><p>name</p></td><td><p>KDA</p></td><td><p>winrate</p></td>'
    );
    $table.appendChild($thead);

    const $tbody = newElement('tbody');
    history.seasonchamp.forEach(champ =>{
        const tbodyInnerTemplate = `
        <tr>
            <td><div class="img" style="background-image:url('${champ.champimg}')"></div></td>
            <td><p>${champ.chmapname}</p></td>
            <td><p>${champ.kda}</p></td>
            <td><p>${champ.winrate}%</p></td>
        </tr>`

        $tbody.insertAdjacentHTML('beforeend', tbodyInnerTemplate);
    });
    $table.appendChild($tbody);
});

const $historyNav = document.querySelector('.carousel-nav');
const $navUl = newElement('ul', 'flex j-b');
$historyNav.appendChild($navUl);
historyData.forEach((history) => {
    const $navLiTemplate = `
    <li>
        <a href="#season${history.year}">
            <p>${history.year}</p>
        </a>
        <div class="section-line"></div>
    </li>
    `
    $navUl.insertAdjacentHTML('beforeend', $navLiTemplate);
});
