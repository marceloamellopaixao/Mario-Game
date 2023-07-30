// gameOver()

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const marioJump = () =>{
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log(loop);
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

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

function gameOver(){
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

document.addEventListener('keydown', marioJump);