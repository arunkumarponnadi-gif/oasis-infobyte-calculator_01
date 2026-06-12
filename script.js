const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

/* BUTTON SOUND */

const clickSound = new Audio(
"https://www.soundjay.com/buttons/sounds/button-29.mp3"
);

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

/* APPEND VALUE */

function appendValue(value) {

    playSound();

    display.value += value;
}

/* CLEAR DISPLAY */

function clearDisplay() {

    playSound();

    display.value = "";
}

/* DELETE LAST */

function deleteLast() {

    playSound();

    display.value = display.value.slice(0, -1);
}

/* CALCULATE */

function calculate() {

    playSound();

    try {

        let expression = display.value;

        /* Replace symbols */

        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        let result = eval(expression);

        /* Save History */

        let historyItem =
        document.createElement("li");

        historyItem.textContent =
        `${display.value} = ${result}`;

        historyList.prepend(historyItem);

        display.value = result;

    }

    catch {

        display.value = "Error";

    }

}

/* THEME TOGGLE */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const themeBtn =
    document.querySelector(".theme-btn");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeBtn.innerHTML = "☀️";

    }

    else {

        themeBtn.innerHTML = "🌙";

    }

}

/* KEYBOARD SUPPORT */

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (
        !isNaN(key) ||
        ["+", "-", "*", "/", ".", "%"].includes(key)
    ) {

        appendValue(key);

    }

    else if (key === "Enter") {

        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

});