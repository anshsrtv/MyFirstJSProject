'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore= 0;

function setMessage(x){
    document.querySelector(".message").textContent=x;
    
}
document.querySelector(".check").addEventListener("click", ()=>{
    let guess = document.querySelector(".guess").value;
    if(guess<secretNumber){
        setMessage("Too Low!");
        score--;
        
    } else if(guess>secretNumber){
        setMessage("Too High!");
        score--;
    }
    else{
        setMessage("You won!!!");
        document.querySelector("body").style.backgroundColor='#39e600';
        document.querySelector(".number").textContent=secretNumber;
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    console.log(score);
    document.querySelector(".score").textContent=score;
    if(score==0){
        setMessage('You lost the game');
        document.querySelector('.score').textContent = 0;
    }
})

document.querySelector(".again").addEventListener("click", ()=>{
    score = 20;
    setMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})
