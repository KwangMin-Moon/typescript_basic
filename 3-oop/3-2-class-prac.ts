{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 14;
    // constructor(coffeeBeans: number) {
    //   this.coffeeBeans = coffeeBeans;
    // }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffee = new CoffeeMaker();
  console.log(coffee);

  console.log(coffee.makeCoffee(1));
  console.log(coffee);
}
