
window.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    squares.forEach(function (square) {
        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    });
});
squares.forEach(function (square) {
    square.classList.add("square");

    square.addEventListener("click", function () {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    });
});

square.addEventListener("mouseover", function () {
    square.classList.add("hover");
});

square.addEventListener("mouseout", function () {
    square.classList.remove("hover");
});
