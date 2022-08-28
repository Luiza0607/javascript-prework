{
    const playGame = function (playerInput) {
        clearMessages();
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } else {
                printMessage("Nie znam ruchu" + argMoveId + ".");
                return "nieznany ruch";
            }
        };

        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);

        const displayResult = function (argcomputerMove, argplayerMove) {
            printMessage("Zagrałem" + argcomputerMove + ", a Ty" + argplayerMove + ".");
            if (computerMove == playerMove) {
                printMessage("Mamy remis!");
            } else if (
                (computerMove == 'kamień' && playerMove == 'papier') ||
                (computerMove == 'nożyce' && playerMove == 'kamień') ||
                (computerMove == 'papier' && playerMove == 'nożyce')) {
                printMessage('Wygrywasz!');

            } else if (
                (computerMove == 'papier' && playerMove == 'kamień') ||
                (computerMove == 'kamień' && playerMove == 'nożyce') ||
                (computerMove == 'nożyce' && playerMove == 'papier')) {
                printMessage('Przegrywasz!');

            } else {
                printMessage('Nie rozstrzygnięto');
            }
        };
        displayResult(computerMove, playerMove);
    };


    document.getElementById("play-rock").addEventListener("click", function () {
        playGame(1);
    });

    document.getElementById("play-paper").addEventListener("click", function () {
        playGame(2);
    });
    document.getElementById("play-scissors").addEventListener("click", function () {
        playGame(3);
    });
}
