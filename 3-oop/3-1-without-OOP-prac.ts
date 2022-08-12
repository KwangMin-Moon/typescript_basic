// 요구사항
// 1. [ ] 커피콩, 1shot에 들어가는 커피콩양을 정의하는 변수
// 2. [ ] 커피콩 여유분 확인하고 있으면 커피 만들기
// 3. [ ] shot 정보와 우유 정보를 리턴

{
  type CoffeCup = {
    shot: number;
    milk: boolean;
  };
  const COFFEE_BEANS_PER_SHOT: number = 4;
  let coffeeBean: number = 14;

  function coffeeMaker(shot: number): CoffeCup {
    if (coffeeBean > COFFEE_BEANS_PER_SHOT * shot) {
      coffeeBean -= COFFEE_BEANS_PER_SHOT * shot;
      return {
        shot,
        milk: false,
      };
    } else {
      throw new Error('Not Enough coffeBeans');
    }
  }

  console.log(coffeeMaker(2));
}
