const bird = document.querySelector("#bird")
const pipe1T = document.querySelector("#pipe1-top")
const pipe1B = document.querySelector("#pipe1-bot")
const pipe2T = document.querySelector("#pipe2-top")
const pipe2B = document.querySelector("#pipe2-bot")

let y = 50
let vy = 0

const pipe1w =40
const pipe2w =40
const space = 150

let pipe1x = 300
let pipe1y1 = 100
let pipe1y2 = pipe1y1 + space

let pipe2x = 650
let pipe2y1 = 100
let pipe2y2 = pipe2y1 + space

let score = 0

function frame () { 

    bird.style.position = 'absolute'
    bird.style.top = y + 'px'

    // bird plus gravity
    y+=vy
    vy+=0.3

    //move pipes
    const height = window.innerHeight
    if (y<-100 || y>height) {
        return
    }


    pipe1T.style.position = 'absolute'
    pipe1T.style.left = pipe1x + 'px'
    pipe1T.style.width = pipe1w + 'px'
    pipe1T.style.top = '0'
    pipe1T.style.height = pipe1y1 + 'px'
    pipe1T.style.backgroundColor = 'green'

    pipe1B.style.position = 'absolute'
    pipe1B.style.left = pipe1x + 'px'
    pipe1B.style.width = pipe1w + 'px'
    pipe1B.style.top = pipe1y2 + 'px'
    pipe1B.style.bottom = '0'
    pipe1B.style.backgroundColor = 'green'

    pipe2T.style.position = 'absolute'
    pipe2T.style.left = pipe2x + 'px'
    pipe2T.style.width = pipe2w + 'px'
    pipe2T.style.top = '0'
    pipe2T.style.height = pipe2y1 + 'px'
    pipe2T.style.backgroundColor = 'blue'

    pipe2B.style.position = 'absolute'
    pipe2B.style.left = pipe2x + 'px'
    pipe2B.style.width = pipe2w + 'px'
    pipe2B.style.top = pipe2y2 + 'px'
    pipe2B.style.bottom = '0'
    pipe2B.style.backgroundColor = 'blue'

    pipe1x -=3
    pipe2x -=3


    //include more pipes
    //implement object collision

    if (pipe1x<40 && pipe1x+pipe1w>0) {
        if (pipe1y1-34>y || pipe1y2-48<y) {
            alert("Your score was "+ score)
            return
        }
    }

    if (pipe2x<40 && pipe2x+pipe2w>0) {
        if (pipe2y1-3>y || pipe2y2-48<y) {
            alert("Your score was "+ score)
            return
        }
    }

    if (pipe1x + pipe1w <0) {
        pipe1x = 630
        score = score+1
        pipe1y1 = Math.random()*(height-space)
        pipe1y2 = pipe1y1 + space
        console.log('score :' + score)
    }

    if (pipe2x + pipe2w <0) {
        pipe2x = 630
        score = score+1
        pipe2y1 = Math.random()*(height-space)
        pipe2y2 = pipe2y1 + space
        console.log('score :' + score)
    }

    window.requestAnimationFrame(frame)
}

function flap (e) {
    console.log("Key Pressed: " +e.key)

    if (e.key === ' ') {
        vy = -10
    }
}

document.addEventListener("keydown", flap)

frame()