// Задание 1: 
// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

function rollDice() {
 return Math.floor(Math.random() * 6) + 1; // Генерация случайного числа от 1 до 6
}

function calculateSum(diceRolls) {
    return diceRolls.reduce((sum, roll) => sum + roll, 0);
}

function determineWinner(player1Sum, player2Sum) {
    if (player1Sum > player2Sum) {
        return  'Игрок 1 победил!'; 
      }  else if (player2Sum > player1Sum) {
     return 'Игрок 2 победил!'; 
    } else {
    return 'Ничья!';
    }
}

function gameAlreadyStarted() {
    let player1Rolls = []
    let player2Rolls = []

    for (let i = 0; i < 3; i++) {
        player1Rolls.push(rollDice());
        player2Rolls.push(rollDice());
    }

    let player1Sum = calculateSum(player1Rolls); // Сумма результатов бросков игрока 1
    let player2Sum = calculateSum(player2Rolls);

    let winner = determineWinner(player1Sum, player2Sum);

    console.log('Игрок 1 выбил ' + player1Sum + ' очков!')
    console.log('Игрок 2 выбил ' + player2Sum + ' очков!')
    console.log(winner)
}

gameAlreadyStarted()