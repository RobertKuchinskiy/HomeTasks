// Задание 1: 
// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

const player1 = {
    name: 'Игорь',
    gender: 'Мальчик'
}

const player2 = {
    name: 'Мария',
    gender: 'Девочка'
}

function rollDice() {
 return Math.floor(Math.random() * 6) + 1; // Генерация случайного числа от 1 до 6
}

function determineWinner(player1Sum, player2Sum) {
    if (player1Sum > player2Sum) {
        return  $player1.gender + $player1.name + 'победил!';
      }  else if (player2Sum > player1Sum) {
     return $player2.gender + $player2.name + 'победил!'; 
    } else {
    return 'Ничья между' + $player1.gender + $player1.name + 'и' + $player2.gender + $player2.name;
    }
}

function gameAlreadyStarted() {
    let player1Rolls = []
    let player2Rolls = []

    for (let i = 0; i < 3; i++) {
        player1Rolls.push(rollDice());
        player2Rolls.push(rollDice());
    }
}

let player1Sum = calculateSum(player1Rolls); // Сумма результатов бросков игрока 1
let player2Sum = calculateSum(player2Rolls);

let winner = determineWinner(player1Sum, player2Sum);

console.log($player1.gender + $player1.name + 'Выбил' +player1Sum + 'Очков!')
console.log($player2.gender + $player2.name + 'Выбила' +player2Sum + 'Очков!')
console.log(winner)