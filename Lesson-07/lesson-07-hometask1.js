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
    return resultArray;
}

const N = 2;
const M = 12;

const fibonacciValue = FibonacciNumbersArray(N, M);
console.log(fibonacciValue);


// Задание 4:
// Даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах 
// совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2)


function compareNumbers(number1, number2) {
    const digits1 = Array.from(String(number1), Number);
    const digits2 = Array.from(String(number2), Number);
  
    let positionAndValueCount = 0;
    let valueCount = 0;
  
    for (let i = 0; i < digits1.length; i++) {
      if (digits1[i] === digits2[i]) {
        positionAndValueCount++;
      } else if (digits2.includes(digits1[i])) {
        valueCount++;
      }
    }
  
    return [positionAndValueCount, valueCount];
  }
  
  const number1 = 3487;
  const number2 = 3794;
  const [positionAndValueCount, valueCount] = compareNumbers(number1, number2);
  console.log(positionAndValueCount, valueCount);


// Задание 5:
// Cортировка массива по возрастанию/убыванию


function sortHigh(array) {
  
    const sortedArray = Array.from(array);
  
    sortedArray.sort((a, b) => a - b);
  
    return sortedArray;
  }
  
  function sortLow(array) {

    const sortedArray = Array.from(array);
  
    sortedArray.sort((a, b) => b - a);
  
    return sortedArray;
  }
  
  
  const numbers1 = [58483, 2123, 912, 14948, 722, 3345];
  const highMassiveOrder = sortHigh(numbers1);
  console.log(highMassiveOrder);
  
  const lowMassiveOrder = sortLow(numbers1);
  console.log(lowMassiveOrder);


  // Задание 6:
  // Удалить из массива все повторяющиеся элементы


  function removeDubles(array) {

    const uniqueArray = [];
  
    for (let i = 0; i < array.length; i++) {
    
      if (uniqueArray.includes(array[i])) {
        continue;

      }
  
      uniqueArray.push(array[i]);

    }
  
    return uniqueArray;
  }
  

  const numbers2 = [111, 212, 3, 222, 45, 111, 465, 212, 465];
  const noDublesNumbers = removeDubles(numbers2);
  console.log(noDublesNumbers);