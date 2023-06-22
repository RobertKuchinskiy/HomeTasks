// Задание 3: Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getNum(delay, min, max) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = getRandomNumber(min, max);
        resolve(randomNumber);
      }, delay);
    });
  }
  
  async function sumRandomNumbers() {
    const result1 = await getNum(3000, 1, 5);
    const result2 = await getNum(5000, 6, 10);
  
    const sum = result1 + result2;
    console.log(sum);
  }
  
  sumRandomNumbers();