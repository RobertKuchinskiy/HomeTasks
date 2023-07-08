// Задание 3: Шеф-повар (Декоратор)

class Vegetable {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
    }
  
    getCalories() {
      return this.calories;
    }
  }
  
  class Salad {
    constructor() {
      this.vegetables = [];
    }
  
    addVegetable(vegetable) {
      this.vegetables.push(vegetable);
    }
  
    getTotalCalories() {
      let totalCalories = 0;
      for (let vegetable of this.vegetables) {
        totalCalories += vegetable.getCalories();
      }
      return totalCalories;
    }
  
    findVegetablesInCalorieRange(minCalories, maxCalories) {
      return this.vegetables.filter(
        (vegetable) =>
          vegetable.getCalories() >= minCalories && vegetable.getCalories() <= maxCalories
      );
    }
  }
  
  class SaladDecorator {
    constructor(salad) {
      this.salad = salad;
    }
  
    getTotalCalories() {
      return this.salad.getTotalCalories();
    }
  
    sortVegetablesByCalories() {
      this.salad.vegetables.sort((a, b) => a.getCalories() - b.getCalories());
    }
  }
  
  class CaloriesCounter extends SaladDecorator {
    getTotalCalories() {
      const totalCalories = super.getTotalCalories();
      console.log("Общая калорийность салата:", totalCalories);
      return totalCalories;
    }
  }
  
  class VegetableSorter extends SaladDecorator {
    sortVegetablesByCalories() {
      super.sortVegetablesByCalories();
      console.log("Отсортированные овощи", this.salad.vegetables);
    }
  }
  
  const salad = new Salad();
  
  salad.addVegetable(new Vegetable("Помидор", 120));
  salad.addVegetable(new Vegetable("Огурец", 250));
  salad.addVegetable(new Vegetable("Морковка", 200));
  salad.addVegetable(new Vegetable("Картошка", 465));
  salad.addVegetable(new Vegetable("Кукуруза", 74));
  
  const caloriesCounter = new CaloriesCounter(salad);
  caloriesCounter.getTotalCalories();
  
  const vegetableSorter = new VegetableSorter(salad);
  vegetableSorter.sortVegetablesByCalories();
  
  const filteredVegetables = salad.findVegetablesInCalorieRange(100, 300);
  console.log("Овощи в заданном диапазоне калорийности", filteredVegetables);
