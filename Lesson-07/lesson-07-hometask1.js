// Задание 1:
// Поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArray(array) {
    // Создаем пустой массив с той же длиной, что и исходный массив
    const reversedArray = new Array(array.length);
  
    // Копируем элементы исходного массива в обратном порядке
    for (let i = 0; i < array.length; i++) {
      reversedArray[i] = array[array.length - 1 - i];
    }
  
    return reversedArray;
  }
  
  const originalMassive = [1, 2, 3, 4, 5, 6];
  const reversedMassive = reverseArray(originalMassive);
  console.log(reversedMassive);

// Задание 2:
// Найти максимальное значение числа в массиве ([3,67,15...])

function maxValue(array) {

return Math.max(...array);

}

const newMassive = [3, 67, 15, 129, 31, 198];
const maxMassivePoint = maxValue(newMassive);
console.log(maxMassivePoint)

// Задание 3:
// Записать в массив ряд фибоначчи начиная с N члена с длинной массива M

function FibonacciNumbersArray(N, M) {

    const fibonacciArray = new Array(M);

    fibonacciArray[0] = 0;
    fibonacciArray[1] = 1;

    for (let i = 2; i < M; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    const resultArray = fibonacciArray.slice(N);
    return resultArray
}

const N = 3;
const M = 10;

const fibonacciValue = FibonacciNumbersArray(N, M);
console.log(fibonacciValue);

// Задание 4:
// Даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах 
// совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2)

