score = 0;
cross = true;

let audiogo =new Audio('marioDeath.mp3');
let audio =new Audio('bgMusic.3gp');
    audio.play()
document.onkeydown = function(e){
    console.log("keycode", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); 
        dino.style.left= dinoX +80 +'px'
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); 
        dino.style.left= (dinoX -80) +'px'
    }
}

setInterval(() => {
    dino= document.querySelector('.dino');
    gameOver= document.querySelector('.gameOver');
    obstacle= document.querySelector('.obstacle');
    
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    console.log(offsetX, offsetY);
    if(offsetX<69&&offsetY<80){
        gameOver.innerHTML= "Game Over buddy!";
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        audio.pause();
    }

    else if(offsetX<70 && cross)
    {
        score+=100;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDuration= aniDuration-0.3;
        obstacle.style.animationDuration=newDuration+'s'; 
        }, 500);
        

    }
},10);

function updateScore(score){
    scoreCont.innerHTML="Your Score:" + score;
} 