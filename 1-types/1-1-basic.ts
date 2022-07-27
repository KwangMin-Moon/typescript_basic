{
  // 변수와 클래스와 함수에 어떤 타입의 데이터를 전달할 수 있고 받아 올 수 있는지를 명확하게 작성하는 것이 제일 중요하다.
  // 모듈을 작성하지 않고 그냥 파일을 작성하게 되면 모두 다 global scope로 책정이 된다. 다른 파일에서 이름이 충돌 될 수 있다.
  // 그렇기 때문에 블럭을 이용해서 로컬 스코프로 작성

  // var을 쓰지 말자
  // 타입스크립트 코드는 어차피 타입스크립트 코드로 변환 되고 타겟 버전을 선택할 수 있기 때문에 let을 써도 브라우저 호환성 문제는 걱정할 필요 없다.
  // 자바스크립트로만 프로젝트를 하더라도 많은 프로젝트에서 바벨을 이용해서 자바스크립트 최신 버전을 낮은 버전으로 변환해서 배포를 하고 있다.

  // JavaScript
  // Primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array....

  // 타입스크립트에서 변수를 선언할 때 조금 더 엄격하게 타입을 정의하고 한 번 정의된 타입에는 다른 타입의 데이터는 담을 수가 없다.

  // 기본 타입 정리
  // number
  const num: number = 1; // 소수점도 가능하다.

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined 비었는지 안비었는지 아직 결정 안됨
  let age: number | undefined; // 단독으로 거의 쓰이지 않는다. null 보다는 undefined를 쓴다.
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 무언가를 찾는 함수가 있다고 했을 때 찾았다면 숫자를 리턴하고 찾지 못하면
    // undefined를 리턴하도록 할 수 있다. 무언가가 있고 없을 떄 undefined를 많이 쓴다.
    return undefined;
  }

  //null 비었다고 결정 됨
  let person: null; // 단독으로 거의 안쓰인다.
  person = null;
  let person2: string | null;

  // unknown  unknown은 안쓰는게 좋다. 어떤 종류의 데이터가 담길 지 알수가 없는 타입, 어떤 데이터든 담을 수 있다.
  // 쓰면 안좋은데 왜 있냐? 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 때문이다. 타입스크립트에서 자바스크립트 라이브러리를 이용하는 경우에
  // 자바스크립트에서 리턴하는 타입을 모를 수 있다. 그때 unknown을 쓸 수 있다.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 어떤 것이든 담을 수 있는 변수, 안쓰는게 좋다.
  let anything: any = 0;
  anything = 'hello';

  // void 함수에서 아무거도 리턴하지 않으면(undefined) void라는 타입이 된다. 보통은 함수에서 무언가를 리턴할 때 타입을 명시하는 것이
  // 좋은 관례이다. void는 생략할 수 있다. 스타일 가이드에 따라 갈 것
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 이렇게 선언하는 경우 없다고 보면 된다.

  // never 리턴하지 않는 함수, 함수에서 절대 리턴되지 않는 경우에 명시하기 위해 쓰인다. 아래의 예제의 경우 에러를 던지거나, 무한 루프의 경우
  function throwError(message: string): never {
    // message => server (log)
    throw new Error(message);
    // while (true) {}
  }

  // object 원시타입을 제외한 모든 object 타입을 할당할 수 있다. 추상적이고 어떤것이든 담을 수 있는 타입은 안쓰는게 좋다.
  // 배열, 객체 등 여러가지가 들어갈 수 있는 obj타입도 안쓰는게 좋다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
