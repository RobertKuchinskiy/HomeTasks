// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function squareNumber(num) {
    return new Promise(resolve => {
      const result = num * num;
      resolve(result);
    });
  }
  
  const firstPromise = Promise.resolve(3);
  
  firstPromise
    .then(result => delay(3000).then(() => squareNumber(result))) 
    .then(result => delay(3000).then(() => squareNumber(result))) 
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error); 
    });