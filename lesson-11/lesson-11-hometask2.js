// Задание 3: Шеф-повар Фабричный метод

class Vegetable {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
    }
  
    getCalories() {
      return this.calories;
    }
  }
  
  class Tomato extends Vegetable {
    constructor() {
      super("Помидор", 120);
    }
  }
  
  class Cucumber extends Vegetable {
    constructor() {
      super("Огурец", 250);
    }
  }
  
  class Carrot extends Vegetable {
    constructor() {
      super("Морковка", 200);
    }
  }

  class Potato extends Vegetable {
    constructor() {
      super("Картошка", 465);
    }
  }

  class Corn extends Vegetable {
    constructor() {
      super("Кукуруза", 74);
    }
  }
  
  class SaladFactory {
    createVegetable(name) {
      switch (name.toLowerCase()) {
        case "помидор":
          return new Tomato();
        case "огурец":
          return new Cucumber();
        case "морковка":
          return new Carrot();
        case "картошка":
          return new Potato();
        case "кукуруза":
          return new Corn();
        default:
          throw new Error("Invalid vegetable name.");
      }
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

  sortVegetablesByCalories() {
    this.vegetables.sort((a, b) => a.getCalories() - b.getCalories());
  }

  findVegetablesByCaloriesRange(minCalories, maxCalories) {
    return this.vegetables.filter(
      (vegetable) =>
        vegetable.getCalories() >= minCalories &&
        vegetable.getCalories() <= maxCalories
    );
  }
}

  // Пример использования
  const saladFactory = new SaladFactory();
  const salad = new Salad();
  
  salad.addVegetable(saladFactory.createVegetable("Помидор"));
  salad.addVegetable(saladFactory.createVegetable("Огурец"));
  salad.addVegetable(saladFactory.createVegetable("Морковка"));
  salad.addVegetable(saladFactory.createVegetable("Картошка")); 
  salad.addVegetable(saladFactory.createVegetable("Кукуруза"));

  console.log("Общая калорийность салата:", salad.getTotalCalories());

  salad.sortVegetablesByCalories();
  console.log("Отсортированные овощи", salad.vegetables);

  const filteredVegetables = salad.findVegetablesByCaloriesRange(100, 300);
  console.log("Овощи в заданном диапазоне калорийности:", filteredVegetables);