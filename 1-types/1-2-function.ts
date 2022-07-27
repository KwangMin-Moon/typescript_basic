{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // 위 코드는 간단한 코드라서 어떤 걸 하는지 잘 파악할 수 있지만 함수가 긴 경우에는 어떤 값을 전달해야할 지 잘 모를 경우도 있고
  // 어떤 값을 리턴하지?라고 모를 때도 있다.

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // 타입 정보를 기입함으로써 조금 더 높은 문서화 효과를 볼 수 있고 조금 더 직관적으로
  // 함수는 이런 것들을 받아서 이런 일을 하고 어떤 걸 리턴하는 구나 이해할 수 있게 도와준다.

  // JavaScript => TypeScript
  // Optional parameter
  // 어떨 때는 이름만 출력하는 함수로도 쓰고 싶다면? 두 가지 경우 모두다 활용하고 싶은 함수를
  // 만들고 싶을 때 옵셔널 파라미터를 이용할 수 있다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Ellie'); // Ellie, undefined
  printName('Jason', undefined); // Jason, undefined

  function printName1(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  printName1('Steve', 'Jobs');
  // printName1('Ellie');  빨간줄이 생긴다. | 를 쓰는 경우 인수로 string이나 undefined를 무조건 지정해줘야 한다.

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // 전달하는 숫자를 전부 다 더해주는 함수, 그런데 내가 원하는 만큼의 숫자를 전달할 수 있다.
  // 즉 아무런 인자의 갯수에 제한없이 원하는 만큼 넘기면 알아서 더해주는 함수를 만들고 싶다면?
  // rest parameter을 이용하면 간편하게 배열 형태로 받아올 수 있다.
  // 갯수에는 상관없이 동일한 타입의 데이터를 함수의 인자로 전달할 때 이렇게 rest parameter을 사용할 수 있다.

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
