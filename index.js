var rndIntegers1;
rndIntegers1 = (Math.floor(Math.random()*6)) + 1;


var rndIntegers2;
rndIntegers2 = (Math.floor(Math.random()*6)) + 1;



//-------------------------------------------------------------------------------

function changeColor1(){


    if(rndIntegers1===1 ){
        document.querySelector(".spic1").src = "images/dice-1.png";
    }
    else if (rndIntegers1===2){
        document.querySelector(".spic1").src = "images/dice-2.png";
    }
    else if(rndIntegers1===3){
        document.querySelector(".spic1").src = "images/dice-3.png";
    }
    else if(rndIntegers1===4){
        document.querySelector(".spic1").src = "images/dice-4.png";
    }
    else if(rndIntegers1===5){
        document.querySelector(".spic1").src = "images/dice-5.png";
    }
    else if(rndIntegers1===6){
        document.querySelector(".spic1").src = "images/dice-6.png";
    }

    
}

function changeColor2(){

    if(rndIntegers2===1){
        document.querySelector(".spic2").src = "images/dice-1.png";
    }
    else if (rndIntegers2===2){
        document.querySelector(".spic2").src = "images/dice-2.png";
    }
    else if(rndIntegers2===3){
        document.querySelector(".spic2").src = "images/dice-3.png";
    }
    else if(rndIntegers2===4){
        document.querySelector(".spic2").src = "images/dice-4.png";
    }
    else if(rndIntegers2===5){
        document.querySelector(".spic2").src = "images/dice-5.png";
    }
    else if(rndIntegers2===6){
        document.querySelector(".spic2").src = "images/dice-6.png";
    }


    if (rndIntegers1 === rndIntegers2){
        document.querySelector("h1").innerHTML = "Draw!! ho gya bc.. Play Again";

    }

    if (rndIntegers1 > rndIntegers2){
        document.querySelector("h1").innerHTML = "Player 1 wins !!";
    }

    if (rndIntegers1 < rndIntegers2){
        document.querySelector("h1").innerHTML = "Player 2 wins !!";
    }

    document.querySelector("h3").innerHTML = "Refresh For New Game...";

}
