const block = document.querySelector('[data-block]');
const circle = document.createElement('div');
const text = document.createElement('div');
text.textContent = 'Начать игру';
text.classList.add('text');
const textEnd = document.createElement('div');
textEnd.classList.add('text');
textEnd.style.cursor = 'auto';

const choosingTimeText = document.createElement('div');
const blockForTime = document.createElement('div');
blockForTime.classList.add('block-for-time');
const choosingTime = document.createElement('div');
const choosingTimeSecond = document.createElement('div');
const choosingTimeThree = document.createElement('div');


const blockSecond = document.createElement('div');
blockSecond.classList.add('block-second');

const restart = document.createElement('div');
restart.classList.add('text-restart');

blockSecond.append(textEnd);
blockForTime.append(choosingTime, choosingTimeSecond, choosingTimeThree)
block.append(choosingTimeText, blockForTime, circle, text, blockSecond);

const time = document.querySelector('[data-time]');
let count = null;
let glasses = 0;

function chooseTime(count) {
    circle.classList.add('circle');
    text.textContent = '';
    glasses = 0;
    const updateTime = () => {
        if (count >= 0) {
            time.textContent = count < 4 ? `Игра завершится через ${count--} секунды` : `Игра завершится через ${count--} секунд`
        } else {
            clearInterval(interval);
            count = count;
            circle.classList.remove('circle');
            textEnd.textContent = `Вы набрали ${glasses} очков!`;
            restart.textContent = 'Перезапустить игру';
            blockSecond.appendChild(restart);
            block.removeChild(circle, text);
        }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
}

function removeStyles() {
    choosingTime.textContent = ''
    choosingTime.classList.remove('choosing-time');
    choosingTimeSecond.textContent = ''
    choosingTimeSecond.classList.remove('choosing-time');
    choosingTimeThree.textContent = ''
    choosingTimeThree.classList.remove('choosing-time');
}

text.addEventListener('click', () => {
    choosingTimeText.classList.add('choosing-time-text');
    block.classList.add('new-block')
    choosingTimeText.textContent = 'Выберите время:'
    choosingTime.textContent = '10сек'
    choosingTime.classList.add('choosing-time');
    choosingTimeSecond.textContent = '20сек'
    choosingTimeSecond.classList.add('choosing-time');
    choosingTimeThree.textContent = '30сек'
    choosingTimeThree.classList.add('choosing-time');
    text.textContent = '';
})

choosingTime.addEventListener('click', () => {
    choosingTimeText.textContent = ''
    removeStyles()
    chooseTime(10)
    block.append(circle);
})

choosingTimeSecond.addEventListener('click', () => {
    choosingTimeText.textContent = ''
    removeStyles()
    chooseTime(20)
    block.append(circle);
})

choosingTimeThree.addEventListener('click', () => {
    choosingTimeText.textContent = ''
    removeStyles()
    chooseTime(30)
    block.append(circle);
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
    textEnd.textContent = '';
    restart.textContent = '';
    circle.style.left = '';
    circle.style.top = '';
    circle.style.width = '';
    circle.style.height = '';
    circle.style.backgroundColor = '';
    glasses = 0;
    time.textContent = ''

    choosingTimeText.classList.add('choosing-time-text');
    block.classList.add('new-block')
    choosingTimeText.textContent = 'Выберите время:'
    choosingTime.textContent = '10сек'
    choosingTime.classList.add('choosing-time');
    choosingTimeSecond.textContent = '20сек'
    choosingTimeSecond.classList.add('choosing-time');
    choosingTimeThree.textContent = '30сек'
    choosingTimeThree.classList.add('choosing-time');


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