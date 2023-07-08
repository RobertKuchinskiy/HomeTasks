// Задание 3: Шеф-повар (Фильтр)

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
  
    sortVegetables(sortingStrategy) {
      this.vegetables.sort(sortingStrategy);
    }
  
    findVegetables(caloriesRangeStrategy, minCalories, maxCalories) {
      return this.vegetables.filter((vegetable) =>
        caloriesRangeStrategy(vegetable, minCalories, maxCalories)
      );
    }
  }
  
  const sortByCalories = (a, b) => a.getCalories() - b.getCalories();
  
  const caloriesInRange = (vegetable, minCalories, maxCalories) =>
    vegetable.getCalories() >= minCalories && vegetable.getCalories() <= maxCalories;
  
  const salad = new Salad();
  
  salad.addVegetable(new Vegetable("Помидор", 120));
  salad.addVegetable(new Vegetable("Огурец", 250));
  salad.addVegetable(new Vegetable("Морковка", 200));
  salad.addVegetable(new Vegetable("Картошка", 465));
  salad.addVegetable(new Vegetable("Кукуруза", 74));
  
  const totalCalories = salad.getTotalCalories();
  console.log("Общая калорийность салата::", totalCalories);
  
  salad.sortVegetables(sortByCalories);
  console.log("Отсортированные овощи", salad.vegetables);
  
  const filteredVegetables = salad.findVegetables(caloriesInRange, 100, 300);
  console.log("Овощи в заданном диапазоне калорийности:", filteredVegetables);