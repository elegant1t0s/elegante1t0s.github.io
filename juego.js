const words = ["ELEGANTITO", "CAMION", "MUSICA", "MOD", "LUCES"];
const maxAttempts = 10;
let attempts = maxAttempts;
let selectedWord = "";
let guessedWord = [];

function initGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill("_");
    attempts = maxAttempts;
    document.getElementById("word").textContent = guessedWord.join(" ");
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("letters").innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        const letterButton = document.createElement("button");
        letterButton.textContent = String.fromCharCode(i);
        letterButton.onclick = () => guessLetter(String.fromCharCode(i));
        document.getElementById("letters").appendChild(letterButton);
    }
}

function guessLetter(letter) {
    let correctGuess = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attempts--;
    }

    document.getElementById("word").textContent = guessedWord.join(" ");
    document.getElementById("attempts").textContent = attempts;

    if (attempts === 0) {
        alert("¡Has perdido! La palabra era: " + selectedWord);
        initGame();
    } else if (!guessedWord.includes("_")) {
        alert("¡Felicidades! Has ganado!");
        initGame();
    }
}

window.onload = initGame;