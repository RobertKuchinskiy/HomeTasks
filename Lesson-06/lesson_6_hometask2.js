// Задание 2:
// Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 

function sumOfFridays() {
    let startDate = new Date("2000-01-01");
    let today = new Date();
    let count = 0;

    while (startDate < today) {
        if (startDate.getDay() === 5 && startDate.getDate()  === 13) {
            count++;
        }
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return count;
}

let newSumOfFridays = sumOfFridays();
console.log('Количество пятниц тринадцатого с 01.01.2000 до сегодняшнего дня равно: ' + newSumOfFridays)