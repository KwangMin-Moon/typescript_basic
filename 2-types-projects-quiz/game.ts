/**
 * Let's make a game ๐น
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

// return์ ์ํด์ค์ ์๋ฌ๊ฐ ๋์ค ์์๋๋ฐ break๋ฅผ ์ํด์ค์ ์๋ฌ๊ฐ ๋ฌ๋ค. return์ด ์๋ ๊ฒฝ์ฐ์ break๋ฅผ ํด์ผ ๋ค์๊บผ๊ฐ ์คํ์ด ์๋๋ค.
// break๊ฐ ์์ด์ ์ฌ๋ฐ๋ฅธ direction์ด ๊ฐ๋๋ฐ ๋ฐ์ ๊น์ง ๋ด๋ ค๊ฐ์ ์๋ฌ๋ฅผ ๋์ง ๊ฒ
// ์ด ํจ์๋ ํจ์ ๋ด๋ถ์์ position์ ์์ ํ๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก returnํ๋ ๊ฐ์ ์๋ค.
// ๊ฐ์ฒด ๋ด๋ถ๋ฅผ ๋ณ๊ฒฝํ๊ธฐ ๋๋ฌธ์ const position์ด๋ผ๊ณ  ํ๋ฉด๋๋ค. let์ ์์จ์ค๋ ๋๋ค.
