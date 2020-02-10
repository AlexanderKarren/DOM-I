let firstTime = true;
const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

function toggleTimer() {
    if (firstTime === true) {
        secondTens.textContent = 0;
        secondOnes.textContent = 0;
        msHundreds.textContent = 0;
        msTens.textContent = 0;
    }
    firstTime = false;
    document.querySelector("button").setAttribute("disabled", true);
    let interval = setInterval(function() {
        if (secondOnes.textContent == 9) {
            document.querySelectorAll(".digit").forEach(function(element) {
                element.style.color = "red";
            });
            secondTens.textContent++;
            secondOnes.textContent = 0;
            document.querySelector("button").removeAttribute("disabled");
            clearInterval(interval);
        }
        else {
            document.querySelectorAll(".digit").forEach(function(element) {
                element.style.color = "inherit";
            });
            secondOnes.textContent++;
        }
    }, 10);
}

function resetTimer() {
    secondTens.textContent = "0";
    secondOnes.textContent = "0";
    msHundreds.textContent = "0";
    msTens.textContent = "0";
    document.querySelectorAll(".digit").forEach(function(element) {
        element.style.color = "inherit";
    });
}