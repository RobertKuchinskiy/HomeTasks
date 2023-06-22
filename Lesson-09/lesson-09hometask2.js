// Задание 2: Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getNum() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = getRandomNumber(1,5);
        resolve(randomNumber);
      }, 3000);
    });
  }

  async function squareNumber() {
    const result = await getNum();
    const squaredNumber = result ** 2;
    console.log(squaredNumber);
  }

  squareNumber();