const $main = document.querySelector('.main');
const $subTitles = $main.querySelectorAll('.line');

const favoriteChampionInfo = [
    { subName: "subName" , name : 'azir', kda: 3.9, winRate: 66.7, game : 153 },
    { subName: "subName" , name : 'ryze', kda: 4.0, winRate: 64.2, game : 67 },
    { subName: "subName" , name : 'orianna', kda: 4.5, winRate: 68.8, game : 64 },
    { subName: "subName" , name : 'leblanc', kda: 5.8, winRate: 81.8, game : 55 },
    { subName: "subName" , name : 'corki', kda: 4.7, winRate: 76.5, game : 51 },
    { subName: "subName" , name : 'galio', kda: 4.2, winRate: 60.8, game : 51 },
    { subName: "subName" , name : 'ahri', kda: 4.2, winRate: 65.3, game : 49 },
]

const $champContainer = document.querySelector('.champ-container');

favoriteChampionInfo.forEach((champ) => {

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

const kdaPerSeason = { 3 : 4.5, 4 : 3.9, 5 : 5.5, 6 : 4.3, 7 : 4.1, 8 : 3.5, 9 : 4.1, 10 : 5.0, 11 : 3.9, 12 : 4.1, 13 : 3.5, 14 : 5.3 }
const $graphContainer = document.querySelector('.bar-section');

for(let year in kdaPerSeason) {
    let yearKda = kdaPerSeason[year];

    const $barContainer = document.createElement('div');
    $barContainer.classList.add('bar-container');

    const $bar = document.createElement('div');
    $bar.classList.add('bar');
    $bar.style.height = `${yearKda * 15}%`;

    const $barSeason = document.createElement('p');
    $barSeason.innerHTML = `S ${year}`;

    $barContainer.appendChild($bar);
    $barContainer.appendChild($barSeason);
    $graphContainer.appendChild($barContainer);


};

const $historyContainers = document.querySelectorAll('.history-container');

$historyContainers.forEach($historyContainer => {

    const $leftBtn = $historyContainer.querySelector('.left-btn');
    const $rightBtn = $historyContainer.querySelector('.right-btn');
    const $scenes = $historyContainer.querySelectorAll('.scene');

    $scenes.forEach(($scene, index) => {
        $scene.dataset.index = index; 
    });

    const playVideo = (index) => {
        const $video = $scenes[index].querySelector('video');
        setTimeout(() => {
            $video.play();
        }, 800);
    };

    let currentScene = 0;

    $leftBtn.addEventListener('click', () => {
        if(currentScene > 0) {
            currentScene--;
            $scenes[currentScene].scrollIntoView({behavior : "smooth", inline : 'center'});
            playVideo(currentScene);
        }
    });

    $rightBtn.addEventListener('click', () => {
        if(currentScene < $scenes.length - 1) {
            currentScene++;
            $scenes[currentScene].scrollIntoView({behavior : "smooth", inline : 'center'});
            playVideo(currentScene);
        }
    });

});