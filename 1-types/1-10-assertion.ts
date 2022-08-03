{
  /*
   * Type Assertions 타입을 강요할 때 쓴다. Type Assertions을 쓰는 건 썩 좋은 건 아니다.
   */
  // 타입스크립트는 타입이 없는 자바스크립트와 함께 연동되는 경우가 있기 때문에
  // 불가피하게 써야하는 경우가 있다.
  // 예로들면, 자바스크립트 함수에 아래와 같이 string관련 함수가 있다면 자바스크립트는 타입이 없기 때문에
  // 어떤 값을 리턴하는지 시스템적으로 컴파일러는 잘 모른다.
  // 하지만 이 함수는 분명히 string을 리턴한다. 이처럼 자바스크립트이기 때문에 리턴되는 타입이
  // 타입스크립트는 전혀 알 수 없지만 내부적으로는 항상 문자열을 리턴하는 함수가 있다고 가정해보자.

  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc(); // result에는 문자열이 할당된다.
  // 문자열이기  때문에 문자열의 길이를 알고 싶다. 타입스크립트가 볼때 result는 any 타입이기 때문에
  // 문자열 타입에서 이용가능한 api를 사용할 수가 없다. 하지만 우리가 이 함수에서 문자열을 리턴하는걸 확신할 때
  // Type Assertions을 쓸 수 있다.
  console.log((result as string).length); // 이렇게 하면 문자열에서 사용 가능한 api를 보여 준다.
  console.log((<string>result).length);
  // 근데 이렇게 장담했는데 함수에서 숫자를 반환하면 어떻게 될까? 우리가 장담을 했기 때문에 타입스크립트에서는 에러가 발생하지
  // 않느다. 코드를 작성하는 시점에는 에러나 경고메세지가 발생하지 않는다.
  // 하지만 실행하면 undefined가 출력된다.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 위의 경우를 실행하면 에러가 발생한다. 에플리케이션이 종료된다.
  // 자바스크립트 처럼 코드를 작성할 때 문제가 없지만 실행할 때 죽을 수 있다. 그렇기 때문에 100%확신하는거 아니면 안쓰는게 좋다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers(); // numbers는 숫자일 수도 있고 undefined일 수도 있다.
  numbers!.push(2); // undefined일 수도 있는데 난 배열이라고 확신할 경우 그래서 push를 쓰고 싶다면 변수 뒤에!를 붙여주면 된다.
  // const numbers = findNumbers()!; 이렇게 해줄 수도 있다.

  const button = document.querySelector('class'); // querySelector는 요소를 찾으면 요소를 리턴하고 아니면 null을 리턴
  // querySelector<E extends Element = Element>(selectors: string): E | null;
  // querySelector로 받아온 이 button은 요소가 있을 수도 있고 null일 수도 있다.
  // 그래서 많은 사람들이 아래와 같이 사용한다.
  if (button) {
    button.nodeValue;
  }
  // 위 처럼 쓸 수 있지만 정말 장담할 수 있을 때는
  // const button = document.querySelector('class')!; 이렇게 쓸 수 있다.
  // 그럼 button.nodeValue;이렇게 바로 접근 가능함. 혹은 button!.nodeValue;
}
