export var SNAKE_SPEED = 5;

const info = document.querySelector('.info__button');
const infoText = document.querySelector('.info__container');

info.addEventListener('click', function() {
    info.classList.toggle('is-active');
    infoText.classList.toggle('active');
});

const diff = document.querySelector('.diff__button');
const diffText = document.querySelector('.diff__container');

diff.addEventListener('click', function() {
    diff.classList.toggle('is-active');
    diffText.classList.toggle('active');
});

const play = document.querySelector('.play__button');

play.addEventListener('click', function() {
    var selected = document.getElementById('diff__select').value
    SNAKE_SPEED = selected * SNAKE_SPEED // selected has value 1, 2 or 3
    window.location.replace("snake.html");
});

