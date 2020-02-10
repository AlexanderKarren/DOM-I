function toggleTimer() {
    const secondTens = document.querySelector("#secondTens");
    const secondOnes = document.querySelector("#secondOnes");
    secondTens.textContent = 0;
    secondOnes.textContent = 1;
    setInterval(function() {
        let toTen = false;
        if ((secondOnes.textContent < 9) && (secondOnes.textContent > 0)) {
            secondOnes.textContent++;
        }
        else {
            secondTens.textContent = 1;
            secondOnes.textContent = 0;
            document.querySelectorAll("digit").forEach(function(element) {
                element.style.color = "red";
                console.log(element);
            });
        }
    }, 1000);
}