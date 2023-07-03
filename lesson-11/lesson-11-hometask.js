// Задание 1: Шеф-повар:
// Определить иерархию овощей. 
// Сделать салат. Посчитать калорийность. 
// Провести сортировку овощей для салата на основе одного из параметров. 
// Найти овощи в салате, соответствующие заданному диапазону параметров.

class Vegetables {
constructor (name, calories) {
    this.name = name;
    this.calories = calories;
}

getName () {
    return this.name;
}

getCalories () {
    return this.calories;
}
}

class Salad {
    constructor() {
        this.vegetables = [];
    }

    addVegetables (vegetable) {
        this.vegetables.push(vegetable);
    }

    removeVegetables (vegetable) {
       let index = this.vegetables.indexOf(vegetable);
       if (index !== -1) {
        this.vegetables.splice(index, 1);
       }
    }

getTotalCalories() {
    let totalCalories = 0;
    for (const vegetable of this.vegetables) {
      totalCalories += vegetable.getCalories();
    }
    return totalCalories;
  }

sortVegetablesByCalories() {
    this.vegetables.sort((a, b) => a.getCalories() - b.getCalories());
  }

  findVegetablesByRange(minCalories, maxCalories) {
    return this.vegetables.filter(
      (vegetable) =>
        vegetable.getCalories() >= minCalories && vegetable.getCalories() <= maxCalories
    );
  }
}

let carrot = new Vegetables("Морковь", 200);
let cucmber = new Vegetables("Огурец", 250);
let tomato = new Vegetables("Помидор", 120);
let potato= new Vegetables("Картошка", 465);
let corn = new Vegetables("Кукуруза", 74);

const salad = new Salad();

salad.addVegetables(carrot);
salad.addVegetables(cucmber);
salad.addVegetables(tomato);
salad.addVegetables(potato);
salad.addVegetables(corn);

const totalCalories = salad.getTotalCalories();
console.log("Общая калорийность салата:", totalCalories);

salad.sortVegetablesByCalories();

const vegetablesInRange = salad.findVegetablesByRange(100,300);
console.log("Овощи в заданном диапазоне калорийности:", vegetablesInRange);