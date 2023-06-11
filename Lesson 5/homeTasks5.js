// Задание 1: 
// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

const obj1 = {
    name: 'Игорь',
    gender: 'Мальчик'
}


const obj2 = {
    name: 'Мария',
    gender: 'Девочка'
}




// Задание 2:
// Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 

let dateInit = LocalDate.of(2000, 10, 13);
        while (dateInit.getYear() != 2024) {
            if (dateInit.getDayOfWeek() == DayOfWeek.FRIDAY && dateInit.getDayOfMonth() == 13) {
                System.out.println(dateInit.toString());
            }
            dateInit = dateInit.plusDays(1);
        }
console.log(dateInit)