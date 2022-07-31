{
  /*
   * Type Aliases 새로운 타입을 내가 정의할 수 있다.
   */

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'jason',
    age: 12,
  };

  /*
   * String Literal Types 타입을 문자열로 지정
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // 'name'문자열 외에 다른 문자열을 할당할 수 없다.
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true; // true값만 할당할 수 있다.
}
