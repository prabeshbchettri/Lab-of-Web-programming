let score = 100;
let randomnumber = Math.floor(Math.random() * 100); // global

function guessNumber() {
    const guessInput = document.getElementById("number-input");
    const guessnumber = Number(guessInput.value);
    const scoreElement = document.getElementById("score");
    const display = document.getElementById("display");

    if (score <= 0) {
        display.textContent = "Out of points!";
        showReplayButton();
        return;
    }

    scoreElement.textContent = `Score : ${score}`;

    if (guessnumber === randomnumber) {
        display.textContent =
            "🎉 HOORAY!!! You guessed the number correctly.";
        showReplayButton();
        return;
    }
    else if (guessnumber < randomnumber) {
        display.textContent = "Your number is lower!!";
    }
    else {
        display.textContent = "Your number is higher!!";
    }

    score -= 10;
    scoreElement.textContent = `Score : ${score}`;
}
function showReplayButton() {
    if (document.querySelector(".replay-btn")) return; // prevent duplicates

    const button = document.createElement("button");
    button.textContent = "Replay";
    button.classList.add("replay-btn");

    button.onclick = function () {
        resetGame();
    };

   document.querySelector(".container").appendChild(button);
}
function resetGame() {
    score = 100;
    randomnumber = Math.floor(Math.random() * 100);

    document.getElementById("display").textContent = "";
    document.getElementById("score").textContent = "Score : 100";
    document.getElementById("number-input").value = "";

    const btn = document.querySelector(".replay-btn");
    if (btn) btn.remove();
}
