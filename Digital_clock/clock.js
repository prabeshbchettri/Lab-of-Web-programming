
const clock=document.getElementById("clock")
let timer;

function startTimer(){

    let hours = parseInt(document.getElementById('hours').value) || 0;
    let minutes = parseInt(document.getElementById('minute').value) || 0;
    let seconds = parseInt(document.getElementById('second').value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if(totalSeconds <= 0){
        

        alert("Please enter time!");
        window.location.reload();

        return;
    }

    clearInterval(timer);

    timer = setInterval(function(){

        totalSeconds--;

        if(totalSeconds < 0){
            clearInterval(timer);
            alert("Time's up!");
            return;
        }

        let h = Math.floor(totalSeconds / 3600);
        let m = Math.floor((totalSeconds % 3600) / 60);
        let s = totalSeconds % 60;

        if(h < 10) h = "0" + h;
        if(m < 10) m = "0" + m;
        if(s < 10) s = "0" + s;
document.getElementById("inputBox").style.display = "none";
document.getElementById("start").style.display = "none";

        document.getElementById("timer").innerText = `${h}:${m}:${s}`;

    },1000);
}


setInterval(function(){
    const date=new Date()
   hours=date.getHours();
   minutes=date.getMinutes()
   seconds=date.getSeconds()
   document.getElementById('clock').innerText= `${hours}:${minutes}:${seconds}`;

},1000);

