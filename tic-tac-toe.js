
window.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.querySelector("#status");

    let currentPlayer = "X";

    // Exercise 4: All possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function (square) {
        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Place X or O when clicked
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Exercise 4: Check for a winner
            for (const combination of winningCombinations) {
                const a = combination[0];
                const b = combination[1];
                const c = combination[2];

                if (
                    squares[a].textContent !== "" &&
                    squares[a].textContent === squares[b].textContent &&
                    squares[b].textContent === squares[c].textContent
                ) {
                    status.textContent =
                        "Congratulations! " +
                        squares[a].textContent +
                        " is the Winner!";

                    status.classList.add("you-won");
                }
            }

            // Alternate between X and O
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        // Exercise 3: Hover effect
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });
    const newGameButton = document.querySelector(".btn");

newGameButton.addEventListener("click", function () {
    // Clear all squares
    squares.forEach(function (square) {
        square.textContent = "";
        square.classList.remove("X", "O");
    });

    // Reset the current player
    currentPlayer = "X";

    // Reset the status message
    status.textContent = "Move your mouse over a square and click to play!";
    status.classList.remove("you-won");
});
});
