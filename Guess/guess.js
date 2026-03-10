let score = 100;
function guessNumber() {
    const randomnumber = Math.floor(Math.random() * 100);
    
    const guess = document.getElementById("number-input");
    const guessnumber = Number(guess.value);
    
    let scorenumber = document.getElementById("score");
    scorenumber.textContent=`Score : ${score}`

if(score > 0 )
{

    if (guessnumber === randomnumber) {
        document.getElementById("display").textContent =
            "🎉 HOORAY!!! You guessed the number correctly.";
    }
    else if (guessnumber < randomnumber) {
        document.getElementById("display").textContent =
            "Your number is lower!!";
           
    }
    else {
        document.getElementById("display").textContent =
            "Your number is higher!!";
            
    }
    score=score-10;
    scorenumber.textContent=`Score : ${score}`

}
else{
    scorenumber.textContent="";
 document.getElementById("display").textContent =
            "Out of points!";

        const button = document.createElement("button");
button.textContent = "Replay";
button.onclick=replay()
document.body.appendChild(button);


}
}
function replay()
{
    score=100;
    

}
