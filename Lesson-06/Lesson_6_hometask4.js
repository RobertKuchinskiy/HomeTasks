// Задание 3.2:
// Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function splitNumber(number, parts) {
    let result = [];
    let sum = 0;
  
    for (let i = 1; i <= parts; i++) {
      if (i === parts) {
        result.push((number - sum).toFixed(2));
      } else {
        let random = Math.random() * (number - sum - (parts - i));
        result.push(random.toFixed(2));
        sum += random;
      }
    }
  
    return result;
  }
  
  let originalNumber = 15;
  let numberOfParts = 3;
  
  let numbers = splitNumber(originalNumber, numberOfParts);
  console.log(numbers)