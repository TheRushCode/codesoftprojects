const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

/* CALCULATOR LOGIC */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

/* THEME TOGGLE */
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    themeToggle.innerText = body.classList.contains("dark") ? "☀️" : "🌙";
});
