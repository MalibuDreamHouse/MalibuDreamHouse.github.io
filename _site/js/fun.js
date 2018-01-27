var catClickCount = 0;
var catParty = false;
var sound = new buzz.sound('./cat_song.mp3');

function CatTime() {
    if(catParty) {
        sound.togglePlay();
        return;
    }

    if(catClickCount === 10) {
        sound.play();
        catParty = true;
    } else {
        catClickCount++;
    }
}

function init() {
    var catpaw = document.getElementById('kittyCatFunTime');
    catpaw.addEventListener('click', CatTime);
}

document.addEventListener('DOMContentLoaded', init);

