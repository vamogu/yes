var topPosition = 0
var leftPosition = 0
var speed = 1000

var ball = document.getElementById('ball');
ball.style.position = 'absolute';

moveball = setInterval("ballMove()", speed);

function ballMove () {
    leftPosition = Math.random() * (screen.availWidth-200);
    topPosition = Math.random() * (screen.availWidth-200);

    ball.style.left = leftPosition + 'px';
    ball.style.top = topPosition + 'px';

if(leftPosition >= screen.availWidth) {
    leftPosition = -10
    topPosition = -10
}
}

function explode() {
   
    ball.src = '200w.gif'
    console.log('stop')
    clearInterval(moveball)

}