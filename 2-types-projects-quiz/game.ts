/**
 * Let's make a game 🕹
 */

const position = { x: 0, y: 0 };
function move(direction: 'up' | 'down' | 'left' | 'right') {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

// type Direction = 'up' | 'down' | 'left' | 'right';
// type Position = {
//   x: number;
//   y: number;
// };

// let position: Position = { x: 0, y: 0 };
// function move(direction: Direction): number {
//   switch (direction) {
// case 'up':
//   return (position.y += 1);
// case 'down':
//   return (position.y -= 1);
// case 'left':
//   return (position.x -= 1);
// case 'right':
//   return (position.x += 1);
// default:
//   throw new Error('check direction');
//   }
// }

// return을 안해줘서 에러가 난줄 알았는데 break를 안해줘서 에러가 났다. return이 없는 경우에 break를 해야 뒤에꺼가 실행이 안된다.
// break가 없어서 올바른 direction이 갔는데 밑에 까지 내려가서 에러를 던진 것
// 이 함수는 함수 내부에서 position을 수정하기 때문에 따로 return하는 값은 없다.
// 객체 내부를 변경하기 떄문에 const position이라고 하면된다. let을 안써줘도 된다.
