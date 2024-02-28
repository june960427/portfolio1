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
                { chmapname : 'ahri', kda : 5, champimg : '/src/img/champ-port/ahri-port.jpg', winrate : 89.1},
                { chmapname : 'riven', kda : 6, champimg : '/src/img/champ-port/riven-port.jpg', winrate : 100},
                { chmapname : 'orianna', kda : 5.3, champimg : '/src/img/champ-port/orianna-port.jpg', winrate : 100},
                { chmapname : 'gragas', kda : 4.6, champimg : '/src/img/champ-port/gragas-port.jpg', winrate : 100},
                { chmapname : 'zed', kda : 4.9, champimg : '/src/img/champ-port/zed-port.jpg', winrate : 90.1},
            ],
            teaminfo :  { top : 'impact', jungle : 'bengi', mid : 'faker', ad : 'piglet', sup : 'poomandoo'},
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {summer : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/nidalee.jpg' , VideoPath : "/src/video/2013h1.mp4"},
                    dateinfo: {team : 'CJB', month : 'apr', day: '6'},
                    matchinfo: {chmap: 'nidalee', win: 'win', kda: 3.9, killpart: '87.6%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/zed.jpg' , VideoPath : "/src/video/2013h2.mp4"},
                    dateinfo: {team : 'ktr', month : 'aug', day: '31'},
                    matchinfo: {chmap: 'zed', win: 'win', kda: 2.2, killpart: '50%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/riven.jpg' , VideoPath : "/src/video/2013h3.mp4"},
                    dateinfo: {team : 'tsm', month : 'sep', day: '21'},
                    matchinfo: {chmap: 'riven', win: 'win', kda: 3.7, killpart: '65%'}
                
                } 
            ]
        },

        { 
            year : 2014,
            seasonchamp : [
                { chmapname : 'ahri', kda : 5, champimg : '/src/img/champ-port/ahri-port.jpg', winrate : 89.1},
                { chmapname : 'riven', kda : 6, champimg : '/src/img/champ-port/riven-port.jpg', winrate : 100},
                { chmapname : 'orianna', kda : 5.3, champimg : '/src/img/champ-port/orianna-port.jpg', winrate : 100},
                { chmapname : 'gragas', kda : 4.6, champimg : '/src/img/champ-port/gragas-port.jpg', winrate : 100},
                { chmapname : 'zed', kda : 4.9, champimg : '/src/img/champ-port/zed-port.jpg', winrate : 90.1},
            ],
            teaminfo :  { top : 'impact', jungle : 'bengi', mid : 'faker', ad : 'piglet', sup : 'poomandoo'},
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {summer : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/riven.jpg' , VideoPath : "/src/video/2014h1.mp4"},
                    dateinfo: {team : 'ozone', month : 'Jan', day: '25'},
                    matchinfo: {chmap: 'riven', win: 'win', kda: 4.3, killpart: '57%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/syndra.jpg' , VideoPath : "/src/video/2014h2.mp4"},
                    dateinfo: {team : 'omg', month : 'may', day: '12'},
                    matchinfo: {chmap: 'syndra', win: 'win', kda: 16, killpart: '64%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/yasuo.jpg' , VideoPath : "/src/video/2014h3.mp4"},
                    dateinfo: {team : 'njs', month : 'aug', day: '21'},
                    matchinfo: {chmap: 'yasuo', win: 'win', kda: 10.5, killpart: '81%'}
                
                } 
            ]
        },

        { 
            year : 2015,
            seasonchamp : [
                { chmapname : 'ahri', kda : 5, champimg : '/src/img/champ-port/ahri-port.jpg', winrate : 89.1},
                { chmapname : 'riven', kda : 6, champimg : '/src/img/champ-port/riven-port.jpg', winrate : 100},
                { chmapname : 'orianna', kda : 5.3, champimg : '/src/img/champ-port/orianna-port.jpg', winrate : 100},
                { chmapname : 'gragas', kda : 4.6, champimg : '/src/img/champ-port/gragas-port.jpg', winrate : 100},
                { chmapname : 'zed', kda : 4.9, champimg : '/src/img/champ-port/zed-port.jpg', winrate : 90.1},
            ],
            teaminfo :  { top : 'marin', jungle : 'bengi blank', mid : 'faker', ad : 'bang', sup : 'wolf'},
            seasoninfo:{
                indicator : {record : '15W - 3L',  winrate : '83.3', kda : '5.9', cspm : '9', gpm : '443', goldper : '21.8%', killpart : '69.7%'},
                ranking : {spring : 'champion', summer : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/riven.jpg' , VideoPath : "/src/video/2015h1.mp4"},
                    dateinfo: {team : 'kt', month : 'aug', day: '29'},
                    matchinfo: {chmap: 'riven', win: 'win', kda: 3.7, killpart: '61%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/ryze.jpg' , VideoPath : "/src/video/2015h2.mp4"},
                    dateinfo: {team : 'koo', month : 'oct', day: '31'},
                    matchinfo: {chmap: 'ryze', win: 'win', kda: 13, killpart: '65%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/ryze.jpg' , VideoPath : "/src/video/2015h3.mp4"},
                    dateinfo: {team : 'koo', month : 'oct', day: '31'},
                    matchinfo: {chmap: 'ryze', win: 'win', kda: 13, killpart: '65%'}
                
                },   
                
            ]
        },

        { 
            year : 2016,
            seasonchamp : [
                { chmapname : 'azir', kda : 3.9, champimg : '/src/img/champ-port/Azir.png', winrate : 71.4},
                { chmapname : 'lulu', kda : 5.5, champimg : '/src/img/champ-port/Lulu.png', winrate : 69.2},
                { chmapname : 'victor', kda : 5.2, champimg : '/src/img/champ-port/Viktor.png', winrate : 75},
                { chmapname : 'karma', kda : 3.4, champimg : '/src/img/champ-port/Karma.png', winrate : 50},
                { chmapname : 'corki', kda : 3.7, champimg : '/src/img/champ-port/Corki.png', winrate : 87.5},
            ],
            teaminfo :  { top : 'marin', jungle : 'bengi blank', mid : 'faker', ad : 'bang', sup : 'wolf'},
            seasoninfo:{
                indicator : {record : '98W - 43L',  winrate : '69.5', kda : 4.3, cspm : 8.8, gpm : 421, goldper : '22.3%', killpart : '67.6%'},
                ranking : {spring : 'champion', iem : 'champion',msi : 'champion', words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/cassiopeia.jpg' , VideoPath : "/src/video/2016h1.mp4"},
                    dateinfo: {team : 'rox', month : 'apr', day: '23'},
                    matchinfo: {chmap: 'cassiopeia', win: 'win', kda: 11, killpart: '73%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/azir.jpg' , VideoPath : "/src/video/2016h2.mp4"},
                    dateinfo: {team : 'rng', month : 'may', day: '13'},
                    matchinfo: {chmap: 'azir', win: 'win', kda: 15.6, killpart: '68%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/orianna.jpg' , VideoPath : "/src/video/2016h3.mp4"},
                    dateinfo: {team : 'rox', month : 'oct', day: '22'},
                    matchinfo: {chmap: '0rianna', win: 'win', kda: 4.5, killpart: '75%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/orianna.jpg' , VideoPath : "/src/video/2016h4.mp4"},
                    dateinfo: {team : 'ssg', month : 'oct', day: '30'},
                    matchinfo: {chmap: 'orianna', win: 'win', kda: 9, killpart: '56%'}
                
                },   
                
            ]
        },
        { 
            year : 2017,
            seasonchamp : [
                { chmapname : 'Orianna', kda : 3.9, champimg : '/src/img/champ-port/Orianna.png', winrate : 72.7},
                { chmapname : 'Cassiopeia', kda : 5, champimg : '/src/img/champ-port/Cassiopeia.png', winrate : 82.4},
                { chmapname : 'Galio', kda : 3.5, champimg : '/src/img/champ-port/Galio.png', winrate : 53.8},
                { chmapname : 'Corki', kda : 4.8, champimg : '/src/img/champ-port/Corki.png', winrate : 66.7},
                { chmapname : 'Taliyah', kda : 4.7, champimg : '/src/img/champ-port/Taliyah.png', winrate : 66.7},
            ],
            teaminfo :  { top : 'huni', jungle : 'peanut', mid : 'faker', ad : 'bang', sup : 'wolf'},
            seasoninfo:{
                indicator : {record : '97W - 42L',  winrate : 69.8, kda : 4.1, cspm : 9.4, gpm : 426, goldper : '22.6%', killpart : '66%'},
                ranking : {spring : 'champion', msi : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/ahri.jpg' , VideoPath : "/src/video/2017h1.mp4"},
                    dateinfo: {team : 'g2', month : 'may', day: '22'},
                    matchinfo: {chmap: 'ahri', win: 'win', kda: 4.3, killpart: '62%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/cassiopeia.jpg' , VideoPath : "/src/video/2017h2.mp4"},
                    dateinfo: {team : 'c9', month : 'oct', day: '05'},
                    matchinfo: {chmap: 'cassiopeia', win: 'win', kda: 5.5, killpart: '92%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/orianna.jpg' , VideoPath : "/src/video/2017h3.mp4"},
                    dateinfo: {team : 'edg', month : 'oct', day: '15'},
                    matchinfo: {chmap: 'orianna', win: 'win', kda: 10, killpart: '100%'}
                
                }
            ]
        },

        { 
            year : 2019,
            seasonchamp : [
                { chmapname : 'Azir', kda : 5.1, champimg : '/src/img/champ-port/Azir.png', winrate : 66.7},
                { chmapname : 'Lissandra', kda : 3.9, champimg : '/src/img/champ-port/Lissandra.png', winrate : 92.9},
                { chmapname : 'Akali', kda : 4, champimg : '/src/img/champ-port/Akali.png', winrate : 64.3},
                { chmapname : 'LeBlanc', kda : 5.6, champimg : '/src/img/champ-port/LeBlanc.png', winrate : 83.3},
                { chmapname : 'Neeko', kda : 5.4, champimg : '/src/img/champ-port/Neeko.png', winrate : 80},
            ],
            teaminfo :  { top : 'khan', jungle : 'clid', mid : 'faker', ad : 'teddy', sup : 'mata effort'},
            seasoninfo:{
                indicator : {record : '95W - 45L',  winrate : 67.9, kda : 4.1, cspm : 9, gpm : 409, goldper : '21.8%', killpart : '60.4%'},
                ranking : {spring : 'champion', summer : 'champion', 'rift-rivals' : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/akali.jpg' , VideoPath : "/src/video/2019h1.mp4"},
                    dateinfo: {team : 'kz', month : 'apr', day: '07'},
                    matchinfo: {chmap: 'akali', win: 'win', kda: 10.8, killpart: '60%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/neeko.jpg' , VideoPath : "/src/video/2019h2.mp4"},
                    dateinfo: {team : 'te', month : 'oct', day: '05'},
                    matchinfo: {chmap: 'neeko', win: 'win', kda: 8, killpart: '62%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/tf.jpg' , VideoPath : "/src/video/2019h3.mp4"},
                    dateinfo: {team : 'edg', month : 'oct', day: '14'},
                    matchinfo: {chmap: 'Twisted Fate', win: 'win', kda: 2.6, killpart: '72%'}
                
                }
            ]
        },

        { 
            year : 2020,
            seasonchamp : [
                { chmapname : 'Azir', kda : 5.2, champimg : '/src/img/champ-port/Azir.png', winrate : 77.8},
                { chmapname : 'LeBlanc', kda : 8.1, champimg : '/src/img/champ-port/LeBlanc.png', winrate : 75},
                { chmapname : 'Zoe', kda : 5.1, champimg : '/src/img/champ-port/Zoe.png', winrate : 42.9},
                { chmapname : 'Twisted Fate', kda : 17.3, champimg : '/src/img/champ-port/TwistedFate.png', winrate : 66.7},
                { chmapname : 'Corki', kda : 10.3, champimg : '/src/img/champ-port/Corki.png', winrate : 100},
            ],
            teaminfo :  { top : 'canna', jungle : 'cuzz', mid : 'faker', ad : 'teddy', sup : 'effort'},
            seasoninfo:{
                indicator : {record : '60W - 38L',  winrate : 61.2, kda : 5, cspm : 9, gpm : 406, goldper : '22.4%', killpart : '67.6%'},
                ranking : {spring : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/akali.jpg' , VideoPath : "/src/video/2020h1.mp4"},
                    dateinfo: {team : 'af', month : 'apr', day: '15'},
                    matchinfo: {chmap: 'akali', win: 'win', kda: 7.2, killpart: '43%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/corki.jpg' , VideoPath : "/src/video/2020h2.mp4"},
                    dateinfo: {team : 'drx', month : 'apr', day: '25'},
                    matchinfo: {chmap: 'corki', win: 'win', kda: 10.8, killpart: '69%'}
                
                }
            ]
        },

        { 
            year : 2022,
            seasonchamp : [
                { chmapname : 'Ahri', kda : 5.6, champimg : '/src/img/champ-port/Ahri.png', winrate : 75},
                { chmapname : 'Azir', kda : 3.1, champimg : '/src/img/champ-port/Azir.png', winrate : 63.2},
                { chmapname : 'LeBlanc', kda : 5.9, champimg : '/src/img/champ-port/LeBlanc.png', winrate : 100},
                { chmapname : 'Viktor', kda : 3.3, champimg : '/src/img/champ-port/Viktor.png', winrate : 66.7},
                { chmapname : 'Corki', kda : 5.4, champimg : '/src/img/champ-port/Corki.png', winrate : 100},
            ],
            teaminfo :  { top : 'zeus', jungle : 'onner', mid : 'faker', ad : 'gumayusi', sup : 'keria'},
            seasoninfo:{
                indicator : {record : '107W - 37L',  winrate : 74.3, kda : 4.1, cspm : 8.4, gpm : 408, goldper : '21.3%', killpart : '60%'},
                ranking : {spring : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/leblanc.jpg' , VideoPath : "/src/video/2022h1.mp4"},
                    dateinfo: {team : 'gen', month : 'mar', day: '03'},
                    matchinfo: {chmap: 'leblanc', win: 'win', kda: 12, killpart: '60%'}
                
                },
                {
                    src: {imgPath : '/src/img/champ/lissandra.jpg' , VideoPath : "/src/video/2022h2.mp4"},
                    dateinfo: {team : 'rng', month : 'may', day: '29'},
                    matchinfo: {chmap: 'lissandra', win: 'win', kda: 10.8, killpart: '60%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/ryze.jpg' , VideoPath : "/src/video/2022h3.mp4"},
                    dateinfo: {team : 'jd', month : 'may', day: '30'},
                    matchinfo: {chmap: 'ryze', win: 'win', kda: 4, killpart: '52%'}
                
                },   
            ]
        },

        { 
            year : 2023,
            seasonchamp : [
                { chmapname : 'Azir', kda : 3.4, champimg : '/src/img/champ-port/Azir.png', winrate : 70.6},
                { chmapname : 'Ahri', kda : 3.2, champimg : '/src/img/champ-port/Ahri.png', winrate : 50},
                { chmapname : 'Annie', kda : 4.9, champimg : '/src/img/champ-port/Annie.png', winrate : 81.8},
                { chmapname : 'Jayce', kda : 3.3, champimg : '/src/img/champ-port/Jayce.png', winrate : 55.6},
                { chmapname : 'Kassadin', kda : 5.4, champimg : '/src/img/champ-port/Kassadin.png', winrate : 85.7},
            ],
            teaminfo :  { top : 'zeus', jungle : 'onner', mid : 'faker', ad : 'gumayusi', sup : 'keria'},
            seasoninfo:{
                indicator : {record : '92W - 42L',  winrate : 68.7, kda : 3.5, cspm : 8.3, gpm : 397, goldper : '21%', killpart : '62.6%'},
                ranking : { asianGme : 'gold medal',words : 'champion'}
            },
            scene : [
                {
                    src: {imgPath : '/src/img/champ/azir.jpg' , VideoPath : "/src/video/2023h1.mp4"},
                    dateinfo: {team : 'lng', month : 'oct', day: '05'},
                    matchinfo: {chmap: 'azir', win: 'win', kda: 9, killpart: '69%'}
                
                },
                {
                    src: {imgPath : '/src/img/champ/azir.jpg' , VideoPath : "/src/video/2023h2.mp4"},
                    dateinfo: {team : 'jd', month : 'nov', day: '12'},
                    matchinfo: {chmap: 'azir', win: 'win', kda: 5.5, killpart: '69%'}
                
                },   
                {
                    src: {imgPath : '/src/img/champ/akali.jpg' , VideoPath : "/src/video/2023h3.mp4"},
                    dateinfo: {team : 'wbg', month : 'nov', day: '19'},
                    matchinfo: {chmap: 'akali', win: 'win', kda: 15, killpart: '79%'}
                
                },   
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
        $career.style.filter = 'drop-shadow(0px -15px 15px #696868)'
    }, 550);
};

/* 하이라이트 영역 애니메이션 */

const highlightAnimation = () => {
    const $historyNav = document.querySelector('.carousel-nav');
    const $hilightContainer = document.querySelector('.history-carousel-container');
    $historyNav.classList.remove('hide');
    $hilightContainer.classList.add('history-carousel-animate');
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


const historyData = data.historyData;
const $historyCarousel = document.querySelector('.history-carousel-container');
const $historyNav = document.querySelector('.carousel-nav');
const $navUl = newElement('ul', 'flex j-b');
$historyNav.appendChild($navUl);

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

const makeMatchInfo = (dataArr, index, parent) => {
    const infoInnerTemplate = `
    <div class="info">
        <ul>
            <li>
                <p>date</p>
                <p><span>${dataArr.scene[index].dateinfo.month}</span> ${dataArr.scene[index].dateinfo.day}</p>
            </li>
            <li>
                <p>team</p>
                <p>vs <span>${dataArr.scene[index].dateinfo.team}</span></p>
            </li>
        </ul>
    </div>`
    parent.innerHTML = '';
    parent.insertAdjacentHTML('beforeend', infoInnerTemplate);
    makeInfo(parent, dataArr.scene[index].matchinfo);
};

const btnClickEvent = ($anmiationContainers, dataArr, videoIndex) => {
    $anmiationContainers.forEach((container) => {

        container.classList.toggle('activate');
        [...container.children].forEach((child) => {
            child.classList.toggle('opacity-activate');
        });

        setTimeout(() => {   
            [...container.children].forEach((child) => {
                if(child.tagName === 'VIDEO'){
                    child.src = dataArr.scene[videoIndex].src.VideoPath;
                }
                else if(container.classList[0] === 'match-info-inner'){
                    const $bacgkround = container.querySelector('.background');
                    const $matchInfo = container.querySelector('.info-container');
                    $matchInfo.innerHTML = ''
                    $bacgkround.style.backgroundImage = `url('${dataArr.scene[videoIndex].src.imgPath}')`;
                    makeMatchInfo(dataArr, videoIndex, $matchInfo);
                }
                child.classList.toggle('opacity-activate');
            });
            container.classList.toggle('activate');
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
                <img src="src/img/bg/t1-logo.png" alt="">
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
        <div class="video inner-bg flex c-c">
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
        const $target = event.target.closest('.button');
        
        if($target){

            const targetAttr = $target.getAttribute('data-side');
            const video = $videoMain.querySelector('video');
            const $anmiationContainers = $videoMain.querySelectorAll(`.${target.classList[0]}[data-side=${targetAttr}], .video, .match-info-inner`);

            if(targetAttr === 'prev' &&  1 <= videoIndex){
                videoIndex--
                btnClickEvent($anmiationContainers,history, videoIndex);
            }
            else if(targetAttr === 'next' && videoIndex < history.scene.length-1){
                videoIndex++
                btnClickEvent($anmiationContainers,history, videoIndex);
                video.src = history.scene[videoIndex].src.VideoPath;
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
    const $infoContainer = newElement('div', 'info-container');
    makeMatchInfo(history, 0, $infoContainer);
    $matchInfoInner.appendChild($infoContainer);

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