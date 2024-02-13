const killsPerYear = {
    2013 : 2020,
}

const $graphContainer = document.querySelector('.bar-section');

for(let year in killsPerYear) {
    let yearKills = killsPerYear[year];
    let $bar = document.createElement('div');
    $bar.classList.add('bar');

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