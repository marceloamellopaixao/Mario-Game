// // gameOver()

// const mario = document.querySelector('.mario')
// const pipe = document.querySelector('.pipe')
// const coin = document.getElementById("coin");

// const marioJump = () => {
//     mario.classList.add('jump')

//     setTimeout(() => {
//         mario.classList.remove('jump');
//     }, 500);
// }

// function gameOver() {
//     const gameOver = document.createElement('div')
//     gameOver.classList.add('gameOver-board')
//     gameOver.style.position = 'relative'
//     gameOver.style.width = '500px'
//     gameOver.style.height = '250px'
//     gameOver.style.margin = '120px auto'
//     gameOver.style.borderRadius = '600px'
//     gameOver.style.background = 'linear-gradient(217deg, #0656dd, #d92325)'

//     const titleGameOver = document.createElement('h3')
//     titleGameOver.classList.add('gameOverText')
//     titleGameOver.innerText = 'Game Over'
//     titleGameOver.style.display = 'inline-block';
//     titleGameOver.style.position = 'relative';
//     titleGameOver.style.margin = '110px 170px'
//     titleGameOver.style.fontSize = '32px';
//     titleGameOver.style.fontWeight = 'bold';
//     titleGameOver.style.color = '#fff';
//     titleGameOver.style.textShadow = '4px -2px 9px #000';

//     document.querySelector('.game-board').appendChild(gameOver)
//     document.querySelector('.gameOver-board').appendChild(titleGameOver)
// }

// const loop = setInterval(() => {

//     const coinPosition = coin.offsetLeft
//     const pipePosition = pipe.offsetLeft
//     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

//     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

//         pipe.style.animation = 'none'
//         pipe.style.left = `${pipePosition}px`

//         coin.style.animation = 'none'
//         coin.style.left = `${coinPosition}px`

//         mario.style.animation = 'none'
//         mario.style.bottom = `${marioPosition}px`
//         mario.src = './img/game-over.png'
//         mario.style.width = '75px'
//         mario.style.marginLeft = '50px'
//         gameOver()
//         clearInterval(loop)

//         setTimeout(() => {
//             window.location.reload(true)
//         }, 4000)
//     }

// }, 10)

// let score = 0;
// let coinCollected = false; // Variável para controlar se a moeda foi coletada


// function moveCoinRandomly() {
//     let windowWidth = window.innerWidth;
//     let coinWidth = coin.clientWidth;
//     let randomX = Math.floor(Math.random() * (windowWidth - coinWidth));

//     coin.style.right = randomX + 10 + "px";
// }

// function checkCollision() {
//     const character = document.getElementById("character");

//     let characterRect = character.getBoundingClientRect();
//     let coinRect = coin.getBoundingClientRect();

//     if (
//         characterRect.left < coinRect.right &&
//         characterRect.right > coinRect.left &&
//         characterRect.top < coinRect.bottom &&
//         characterRect.bottom > coinRect.top &&
//         !coinCollected // Verifica se a moeda não foi coletada ainda
//     ) {
//         // Incrementa a pontuação e atualiza a exibição
//         score++;
//         document.getElementById("score").innerText = score;

//         coinCollected = true; // Define que a moeda foi coletada

//         // Reposiciona a moeda aleatoriamente após a colisão
//         moveCoinRandomly();
//     } else {
//         coinCollected = false; // Define que a moeda não foi coletada
//     }
// }

// // Mover a moeda inicialmente ao carregar a página
// moveCoinRandomly();

// // Verificar colisão a cada 100ms
// setInterval(checkCollision, 100);

// document.addEventListener('keydown', marioJump);

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const coin = document.getElementById("coin");
const scoreDisplay = document.getElementById("score");

const marioJump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

function gameOver() {
    const gameOver = document.createElement('div')
    gameOver.classList.add('gameOver-board')
    gameOver.style.position = 'relative'
    gameOver.style.width = '500px'
    gameOver.style.height = '250px'
    gameOver.style.margin = '120px auto'
    gameOver.style.borderRadius = '600px'
    gameOver.style.background = 'linear-gradient(217deg, #0656dd, #d92325)'

    const titleGameOver = document.createElement('h3')
    titleGameOver.classList.add('gameOverText')
    titleGameOver.innerText = 'Game Over'
    titleGameOver.style.display = 'inline-block';
    titleGameOver.style.position = 'relative';
    titleGameOver.style.margin = '110px 170px'
    titleGameOver.style.fontSize = '32px';
    titleGameOver.style.fontWeight = 'bold';
    titleGameOver.style.color = '#fff';
    titleGameOver.style.textShadow = '4px -2px 9px #000';

    document.querySelector('.game-board').appendChild(gameOver)
    document.querySelector('.gameOver-board').appendChild(titleGameOver)
}

const loop = setInterval(() => {

    const coinPosition = coin.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        coin.style.animation = 'none'
        coin.style.left = `${coinPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        gameOver()
        clearInterval(loop)

        setTimeout(() => {
            window.location.reload(true)
        }, 4000)
    }

}, 10)

let score = 0;

function moveCoinRandomly() {
    const windowWidth = window.innerWidth;
    const coinWidth = coin.clientWidth;
    const randomX = Math.floor(Math.random() * (windowWidth - coinWidth));

    coin.style.left = randomX + "px";
}

function checkCollision() {
    const character = document.getElementById("character");

    const characterRect = character.getBoundingClientRect();
    const coinRect = coin.getBoundingClientRect();

    if (
        characterRect.left < coinRect.right &&
        characterRect.right > coinRect.left &&
        characterRect.top < coinRect.bottom &&
        characterRect.bottom > coinRect.top
    ) {
        // Incrementa a pontuação e atualiza a exibição
        score++;
        scoreDisplay.innerText = score;

        // Reposiciona a moeda aleatoriamente após a colisão
        moveCoinRandomly();
    }
}

// Mover a moeda inicialmente ao carregar a página
moveCoinRandomly();

// Verificar colisão a cada 100ms
setInterval(checkCollision, 100);

document.addEventListener('keydown', marioJump);

