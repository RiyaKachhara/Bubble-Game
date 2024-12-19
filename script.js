var timer = 30;
var score =0;
var hitrn;

function CreateBubble(){
    var clutter = "";

    for(var i =1; i <= 70; i++){
        var r = Math.floor(Math.random()*10);
        clutter += `<div class = "bubble">${r}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function RunTimer(){
    var time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent= timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
            
    }, 1000);
}
function GetHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = hitrn;
}

function IncreaseScore(){
    score += 10;
    document.querySelector("#ScoreValue").textContent = score;  
}
function DecreaseScore(){
    score -= 5;
    document.querySelector("#ScoreValue").textContent = score;
}

document.querySelector("#pbottom")
.addEventListener("click", function(details){
    console.log(details);
    var clicked_num = Number(details.target.textContent);
    if(hitrn === clicked_num){
        IncreaseScore();
    }
    else{
        DecreaseScore();
    }
    CreateBubble();
    GetHit();
});

RunTimer();
CreateBubble();
GetHit();




