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

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  //maker2.fillCoffeeBeans(32); CoffeeMaker 인터페이스 안에는 makeCoffee라는 함수 밖에 없기 때문에
  // 커피 콩을 채우는 API는 CoffeeMaker라는 인터페이스에는 존재하지 않는다. 그래서 사용할 수 없다.
  maker2.makeCoffee(3);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(20);
  maker3.fillCoffeeBeans(22);
  maker3.makeCoffee(4);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
  // 동일한 오브젝트의 인스턴스일지라도 이 오브젝트는 두가지의 인터페이스를 구현하기 때문에 인터페이스에서 규약된
  // 클래스보다 조금 더  좁은 범위의 인터페이스에서 규약된 함수들만 접근 가능
}
