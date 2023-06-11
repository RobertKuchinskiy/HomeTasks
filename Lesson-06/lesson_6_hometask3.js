// Задание 3:
// Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. 
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

function splitNumber(number, parts) {
    var result = [];
    var sum = 0;
  
    for (var i = 1; i <= parts; i++) {
      if (i === parts) {
        result.push(number - sum);
      } else {
        var random = Math.floor(Math.random() * (number - sum - (parts - i)));
        result.push(random);
        sum += random;
      }
    }
  
    return result;
  }
  
  var originalNumber = 15;
  var numberOfParts = 3;
  
  var numbers = splitNumber(originalNumber, numberOfParts);
  console.log(numbers)