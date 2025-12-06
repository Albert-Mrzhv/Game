const block = document.querySelector('[data-block]');
const circle = document.createElement('div');
const text = document.createElement('div');
text.textContent = 'Начать игру';
text.classList.add('text');
const textEnd = document.createElement('div');
textEnd.classList.add('text');
textEnd.style.cursor = 'auto';

const blockSecond = document.createElement('div');
blockSecond.classList.add('block-second');

const restart = document.createElement('div');
restart.classList.add('text-restart');

blockSecond.append(textEnd);
block.append(circle, text, blockSecond);

const time = document.querySelector('[data-time]');
let count = 30;
let glasses = 0;

text.addEventListener('click', () => {
    circle.classList.add('circle');
    text.textContent = '';
    glasses = 0
    const updateTime = () => {
        if (count >= 0) {
            time.textContent = count < 4 ? `Игра завершится через ${count--} секунды` : `Игра завершится через ${count--} секунд`
        } else {
            clearInterval(interval)
            count = 30
            circle.classList.remove('circle');
            textEnd.textContent = `Вы набрали ${glasses} очков!`
            restart.textContent = 'Перезапустить игру'
            blockSecond.appendChild(restart)
            block.removeChild(circle, text);
        }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
})

const marginHorizontal = 400;
const marginVertical = 500;
const marginTouchHorizontal = 163;
const marginTouchVertical = 300;
const size = 100;
const arreyColors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'violet', 'gray'];

function createAndPlaceRandomCircle(circlHoris, circlVert) {
    const circleAddSize = circleSize();
    const randomColors = addRandomColors();
    circle.classList.remove('hidden');
    circle.style.left = `${circlHoris}px`;
    circle.style.top = `${circlVert}px`;
    circle.style.width = `${circleAddSize}px`;
    circle.style.height = `${circleAddSize}px`;
    circle.style.backgroundColor = randomColors;
}

restart.addEventListener('click', () => {
    circle.classList.add('circle');
    block.append(circle, text);
    textEnd.textContent = '';
    restart.textContent = '';
    glasses = 0

    const updateTime = () => {
        if (count >= 0) {
            time.textContent = count < 4 ? `Игра завершится через ${count--} секунды` : `Игра завершится через ${count--} секунд`
        } else {
            clearInterval(intervalP)
            count = 30
            circle.classList.remove('circle');
            textEnd.textContent = `Вы набрали ${glasses} очков!`
            restart.textContent = 'Перезапустить игру'
            blockSecond.appendChild(restart)
            block.removeChild(circle, text);
        }
    };

    updateTime();
    const intervalP = setInterval(updateTime, 1000);
})

circle.addEventListener('mousedown', () => {
    circle.classList.add('hidden');
    glasses++
});

circle.addEventListener('mouseup', () => {
    const circleHorizontal = horizontalMovement();
    const circleVertical = verticalMovement();
    createAndPlaceRandomCircle(circleHorizontal, circleVertical);
});

circle.addEventListener('touchstart', () => {
    circle.classList.add('hidden');
    glasses++
});

circle.addEventListener('touchend', () => {
    const touchHorizontal = horizontaTouchlMovement();
    const touchVertical = verticalTouchlMovement();
    createAndPlaceRandomCircle(touchHorizontal, touchVertical);
});

circle.addEventListener('mouseleave', function() {
    circle.classList.remove('hidden');
});

function horizontalMovement() {
    return Math.floor(Math.random() * marginHorizontal);
}

function verticalMovement() {
    return Math.floor(Math.random() * marginVertical);
}

function horizontaTouchlMovement() {
    return Math.floor(Math.random() * marginTouchHorizontal);
}

function verticalTouchlMovement() {
    return Math.floor(Math.random() * marginTouchVertical);
}

function circleSize() {
    const establishSize = Math.floor(Math.random() * size);
    if (establishSize > 10) {
        return establishSize;
    }
}

function addRandomColors() {
    const addColors = Math.floor(Math.random() * arreyColors.length);
    return arreyColors[addColors];
}