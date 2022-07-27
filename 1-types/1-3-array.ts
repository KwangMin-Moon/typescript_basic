{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 2, 3]; // number[] 이렇게 해도 된다.
  // 현재 시점에서 두 가지의 차이점은 number[] 이렇게 쓸 때 readonly를 쓸 수 있다. 일관성을 위해 타입[] 이렇게 쓰는 걸 선호
  // 함수를 만들 때 function printArray(fruits: string[]){} 이런 전달된 배열을 출력하는 함수가 있다면 이 함수는 주어진
  // 데이터를 변경할 수 없다고 한다면 이럴 때는 전달된 인자를 함수 내부에서 변경하지 않도록 하기 위해서 타입으로 보장할 수 있는 방법이
  // 있다. readonly를 붙어주면 된다. function printArray(fruits: readonly string[]){} 이제 저 fruits는 절대 변경할 수 없다.
  // 만약 함수 안에서 fruits.push이렇게 해주면 에러가 난다.

  // Tuple은 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열
  // Tuple 사용하는 것 권장하지 않음 (why? 0, 1이라는 인덱스를 보고 어떤 데이터가 들어있을지 알 수 없다.)
  // 데이터에 접근할 때 인덱스로 접근하는게 가독성이 떨어진다. 내가 값을 출력하거나 정의된 곳으로 가지 않는 이상 0 또는 1 안에 어떤 데이터가
  // 들어있는지 확인하는게 불편하다. 그래서 튜플 대신에 object형태로 또는 class형태로 대신해서 사용할 수 있다.
  // student.name, student.age 이런식으로 접근하는게 가독성도 좋고 한 번에 알아 볼 수 있다. 그래서 튜플을 사용할 수 있는 곳에서는 왠만하면
  // interface, tpye alias, class 같은 아이들로 대체해서 사용하는게 좋다.

  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // 위 처럼 가독성이 떨어지는 걸 피할 수 있는 방법이 디스트럭처링이다.
  const [name, age] = student;

  // 튜플을 쓰는 좋은 예가 react useState이다. const [count, setCount] = useState(0);
  // 내가 무언가를 동적으로 return하는데 class나 interface로 묶기 애매하고 동적으로 관련있는 다른 타입의
  // 데이터를 묶어서 사용자가 이름을 정의해서 쓸 경우에 Tuple이 유용 예) useState
}
