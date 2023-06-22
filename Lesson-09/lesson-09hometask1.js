// Задание 1: Решить используя промисы и async/await. 
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.


function getRandomDelay(ms) {
    return Math.floor(Math.random() * 5000) + 1000; // Случайная задержка от 1 до 5 секунд в миллисекундах
}

function createPromiseWithDelay(value) {
    return new Promise((resolve) => {
      const delay = getRandomDelay();
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }

async function run() {
const promises = [createPromiseWithDelay(1), 
                createPromiseWithDelay(2),
                createPromiseWithDelay(3)]

const result = await Promise.race(promises)
console.log(result)
}

run();