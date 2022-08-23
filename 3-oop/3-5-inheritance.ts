{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface는 '나랑 의사소통하려면 나는 이런 이런 규약을 가지고 있어, 이런 행동을 할 수 있어
  // 라고 명시해 놓는 계약서 같은 아이이다.

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 만약 자식 클래스에서 또다른 데이터를 생성자에서 받아올 수 있다면
    // 예를 들어 기계의 serialNumber를 받아올 수 있다면 어떻게 구현해야 할까?
    // 자식에서 따로 constructor을 구현하는 경우에는 부모의 생성자도 호출해줘야한다.
    // 부모의 생성자는 super()이렇게 하면 된다. 부모 데이터에서도 필요한 데이터를 받아와야한다.
    constructor(beans: number, public readonly serialNumber: string) {
      // public으로 보여주는데 한 번 설정되고 바뀌지 않는다면 readonly를 붙여줄 수 있다.
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
