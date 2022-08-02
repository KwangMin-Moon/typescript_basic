{
  /*
    * Enum 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의할 수 있게 도와주는 타입
    자바스크립트에서 상수를 정의할 때는 보통 한 번 정의하면 바뀌지 않는 특정한 고정 값을 나타낼 때
    const MAX_NUM = 6;  전부다 대문자로 나타낸다
    const MAX_STUDENTS_PER_CLASS = 10;
    */
  // 자바스크립트에는 관련된 요일의 상수들을 정의하는 경우에 서로 연관돼 있지만 이것들을 묶을 수 있는 타입이 따로 존재하지 않다.
  // 그래서 최대한 ENUM에 가깝게 표현할 수 있는 방법으로는 아래와 같이 freeze를 이용해 오브젝트 형태로 나타내는 것
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 2, WEDNESDAY: 3 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  // 여러가지 상수 값들을 한 곳에 모아서 타입이 보장되고 이 타입의 값이 변화되지 않으니까 좀더 타입이 안전하게 쓸 수 있도록 ENUM이란 타입이 있다.

  enum Days { // ENUM에서는 첫글자만 대문자로 작성
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  // ENUM에 따로 값을 정하지 않으면  처음부터 0으로 시작해서 1씩 더해진다.
  // 0부터 시작하는게 싫다면 Monday = 1 이렇게 지정해 주면 1부터 2, 3, 이렇게 자동으로 된다.
  // 숫자 말고 문자열도 할당 할 수 있는데 문자열은 자동으로 할당되지 않음으로 수동적으로 하나씩 할당해 줘야 한다.

  console.log(Days.Thursday); // 3

  // 타입스크립트에서는 ENUM을 가능한한 쓰지 않는 것이 좋다
  // WHY?? ENUM으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는게 문제이다.
  let day: Days = Days.Saturday;
  day = 10;
  // Enum을 쓰게 되면 타입이 정확하게 보장되지 않는다.

  // ENUM 대신 UNION 타입을 활용할 수 있다.
  type DaysOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY';
  let dayOfweek: DaysOfWeek = 'MONDAY';
  dayOfweek = 'WEDNESDAY'; // union 중 하나만 쓸 수 있다. 타입 보장이 된다.

  // 근데 ENUM을 쓰면 자동으로 0,1,2 이렇게 할당되는 장점이 있지 않나?
}
