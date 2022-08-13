{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level 클래스와 연결돼 있기 때문에 object마다 만들어지거나 생성되지 않는다.e
    coffeeBeans: number = 0; // instance (object) level / 난 constructor 안에서만 인스턴스 레벨의 프로퍼티를 만들 수 있다고 생각했는데 아니었다. constructor로 하면 인스턴스를 만들때 인자로 값을 줄 수 있다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
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
  const maker = new CoffeeMaker(32);
  console.log(maker.makeCoffee(3));
}
