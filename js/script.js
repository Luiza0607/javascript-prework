function getMoveName(randomNumber) {
    if (randomNumber == 1) {
        return 'kamień';
    } else if (randomNumber == 2) {
        return 'papier';
    } else (randomNumber == 3); {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argCompuerMove, argPlayerMove){
    if ((argCompuerMove == "kamień" && argPlayerMove == 'papier') ||
    (argCompuerMove == 'nożyce' && argPlayerMove == 'kamień') ||
    (argCompuerMove == 'papier' && argPlayerMove == 'nożyce')){
    printMessage('Ty wygrywasz!');
    } else if (argCompuerMove == argPlayerMove){
        printMessage('Remis!');
    } else if {
    printMessage('Tym razem przegrywasz!');
    }
}    

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove = 'Nieznany ruch';
}
*/

printMessage('Twój ruch to: ' + playerMove);

if (playerMove == 'Nieznany ruch') {
    printMessage('Nieznany ruch');
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrywasz!')
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Wygrywasz!')
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!')
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Przegrywasz!')
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!')
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrywasz!')
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Wygrywasz!')
}







displayResult(computerMove, playerMove);