/**
 * 
Azir Azir	153	
 	 
66.7%
3.9
Ryze Ryze	67	
 	 
64.2%
4.0
Orianna Orianna	64	
 	 
68.8%
4.5
LeBlanc LeBlanc	55	
 	 
81.8%
5.8
Corki Corki	51	
 	 
76.5%
4.7
Galio Galio	51	
 	 
60.8%
4.2
Ahri Ahri	49	

65.3%
4.2
 */

const kdaPerSeason = {
    'Season 5' : 5.5, 
    'Season 6' : 4.3, 
    'Season 7': 4.1, 
    'Season 8' : 3.5, 
    'Season 9' : 4.1, 
    'Season 10' : 5.0, 
    'Season 11' : 3.9, 
    'Season 12' : 4.1, 
    'Season 13' : 3.5, 
    'Season 14' : 5.3 
}

const makeGraph = () => {
    const graphTemplate = `<div class="bar-container"><div class="bar"></div><p>${yearKda}</p></div>`
}
const $graphContainer = document.querySelector('.bar-section');

for(let year in kdaPerSeason) {
    let yearKda = kdaPerSeason[year];
    console.log(year, yearKda)
}


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