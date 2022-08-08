{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 캡슐화 하지 않으면 maker.coffeeBeans = 3; 이렇게 외부에서 접근 가능하다. 누군가 maker.coffeeBeans = -31; 이렇게 설정하면
  // 문제가 된다. 제약 사항이 없기 때문에 외부에서 상태를 변경할 수 있는 위험한 상황이다.

  // public - 따로 작성하지 않으면 모든 것들은 public으로 돼 있다.
  // private - 외부에서 볼 수 없고, 접근할 수 없다.
  // protected - 외부에서는 접근할 수 없지만 이 클래스를 상속한 자식 클래스에서만 접근이 가능하도록 설정할 수 있다.

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level 클래스와 연결돼 있기 때문에 object마다 만들어지거나 생성되지 않는다.e
    private coffeeBeans: number = 0; // instance (object) level
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 보통 아래와 같이 static이라는 키워드를 붙여서 무언가 object를 만들 수 있는 함수를 제공한다면 그 말은
    // 누군가가 이런 생성자를 이용해서 생성하는 것을 금지하기 위해서 쓴다. 그래서 이럴 경우에는 construct를 private으로 만들어서
    // 항상 static 매소드를 쓸 수 있도록 권장하는 것이 더 좋다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 외부에서 직접적으로 설정하는 것이 아니라 아래와 같이 validation을 주고 함수를 통해서 바꿀 수 있게 할 수 있다.
    // 유효성 검사를 통해 조금 더 안정성을 높여서 코딩할 수 있다.
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(32); // 생성자가 아닌 static 함수로 object 생성
}

// 캡슐화는 클래스를 만들 때 외부에서 접근할 수 있는 것은 무엇인지 그리고 내부적으로만 가지고 있어야 하는 데이터는 무엇인지 이런 것들을 결정할 수 있다.
// 그래서 외부에 어떤 걸 노출 할 것인지 잘 생각해서 클래스를 만드는 게 중요하다.
