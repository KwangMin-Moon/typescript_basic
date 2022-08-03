/*
 * Type Inference 타입 추론
 */
// 타입이 알아서 자동으로 결정되는 경우가 있다.

let text = 'hello'; // 따로 타입을 명시하지 않아도 에러가 발생하지 않는다.
text = 'hi';
//text = 2 숫자를 할당하면 에러가 발생
// text라는 변수는 선언함과 동시에 문자열을 할당했기 때문에 타입스크립트에서 자동으로 스트링이라고 타입을 유추할 수 있다.

// function print(message) {
//   console.log(message);
// }
// print('hello');
// print(1);
// message에 타입을 지정하지 않으면 any로 어떤 값이든  전달 될 수 있다.
// 따로 타입을 명시 하지 않으면 함수 인자에는 any라는 값이 할당, any를 쓰는 건 좋지 않다.
// 정확하게 어떤 값이 인자로 올지 타입을 지정하는게 좋다. message:string이라고 해도 좋고 만약 message가 전달되지 않으면
// default parameter 기본값을 할당 할 수도 있다.

function print(message = 'hello') {
  console.log(message);
}
print('hello');
// 기본값을 할당하면 타입 추론으로 따로 타입을 지정하지 않아도 타입스크립트가 추론할 수 있다.

function add(x: number, y: number): number {
  return x + y; // 숫자인 인자 두개를 받아서 더함으로 타입추론으로 반환값의 타입을 알 수 있다. 그래도 적어주는게 좋다.
}
const result = add(1, 2); // result도 add라는 함수가 숫자를 리턴하기 때문에 자동으로 숫자타입으로 결정된다.

// 타입스크립트가 자동으로 타입을 추론해주지만 예제처럼 간단한 경우에는 어떤게 리턴이 되고 알 수 있지만
// 보통 프로젝트에서 코드를 작성할 때 위에 처럼 간단하게 작성하는 경우는 거의 없다
// 그렇기 때문에 왠만하면 타입을 정확하게 명시하는게 좋다.
// 다만 원시 타입 같은 경우에는 너무 뻔한 경우 생략할 수 있다.
