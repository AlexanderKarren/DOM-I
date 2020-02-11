let firstTime = true;
let secondMinuteReached = false;
let minuteReached = false;
const timerContainer = document.querySelector(".digits");
// Div to be appeneded if seconds go to 60
const minuteOnes = document.createElement("div");
minuteOnes.setAttribute("class", "digit");
minuteOnes.setAttribute("id", "minuteOnes");
minuteOnes.textContent = 0;
// Divs that already exist
const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

document.querySelectorAll("button").forEach(function(element, i) {
    element.addEventListener("click", function() {
        if (i === 0) {
            toggleTimer();
        }
        else {
            resetTimer();
        }
    });
});

function toggleTimer() {
    if (firstTime === true) {
        secondTens.textContent = 0;
        secondOnes.textContent = 0;
        msHundreds.textContent = 0;
        msTens.textContent = 0;
    }
    firstTime = false;
    document.querySelector("button").setAttribute("disabled", true);
    let seconds = setInterval(function() {
        if (secondOnes.textContent == 9) {
            document.querySelectorAll(".digit").forEach(function(element) {
                element.style.color = "firebrick";
            });
            secondTens.textContent++;
            secondOnes.textContent = 0;
            document.querySelector("button").removeAttribute("disabled");
            clearInterval(seconds);
            clearInterval(milliseconds);
        }
        else {
            document.querySelectorAll(".digit").forEach(function(element) {
                element.style.color = "inherit";
            });
            secondOnes.textContent++;
        }
        if ((secondTens.textContent == 5) && (secondOnes.textContent == 9)) {
            minuteReached = true;
            const newColon = document.createElement("div");
            newColon.setAttribute("class", "digit");
            newColon.setAttribute("id", "colon2");
            if (secondMinuteReached === false) {
                newColon.textContent = ":";
                timerContainer.prepend(newColon);
                timerContainer.prepend(minuteOnes);
            }
            secondMinuteReached = true;
            secondTens.textContent = 0;
            secondOnes.textContent = 0;
            minuteOnes.textContent++;
            document.querySelectorAll(".digit").forEach(function(element) {
                element.style.color = "firebrick";
            });
            document.querySelector("button").removeAttribute("disabled")
            clearInterval(seconds);
            clearInterval(milliseconds);
        }
    }, 1000);
    let milliseconds = setInterval(function() {
        if (msTens.textContent == 9) {
            msHundreds.textContent++;
            msTens.textContent = 0;
        }
        else {
            msTens.textContent++;
        }
        if ((msTens.textContent == 9) && (msHundreds.textContent == 9)) {
            msHundreds.textContent = 0;
            msTens.textContent = 0;
        }
    }, 10)
}

function resetTimer() {
    minuteOnes.textContent = 0;
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    if (minuteReached === true) {
        for (let i = 0; i < 2; i++) {
            timerContainer.removeChild(timerContainer.childNodes[0]);
        }
    }
    document.querySelectorAll(".digit").forEach(function(element) {
        element.style.color = "inherit";
    });
    minuteReached = false;
    secondMinuteReached = false;
}