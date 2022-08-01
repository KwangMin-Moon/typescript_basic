{
  /* Union Types: OR
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // move의 인수로 문자열을 작성하는 순간 함수가 받을 수 있는 네 가지 타입을 자동으로 보여준다.

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  // 유니온 타입은 발생할 수 있는 케이스들 중에 하나만 할당할 수 있을 때 쓰면 좋다.

  //   // function: login -> success, fail 로그인이라는 함수를 호출하면 성공할 수도 있고 실패할 수도 있다.
  //    성공했다면 성공했을 때 네트워크에서 받아온 값을 리턴하고 실패했다면 실패한 이유를 알려주는 함수를 만들어 보자.
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // function login(): SuccessState | FailState와 같이 써주기보다는
  // 위와 같이 LoginState를 만들어서 써주는게 좋다. 왜? 그럼 LoginState로 가서 확인해야하는데?
  // 만약 저 유니온 타입을 2번 이상 쓴다면 위와 같이 LoginState로 만드는게 좋을거 같다.
  function login(id: string, password: string): Promise<LoginState> {
    return Promise.resolve({
      response: {
        body: 'login in!',
      },
    });
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      // state.reason 또는 state.response를 해도 타입스크립트에서 모른다. 왜냐면 LoginState는 둘 중 하나가 될 수 있기 때문
      // 그래서 코드를 작성하는 시점에는 어떤게 있는지 모른다.  이럴 경우 response라는 키가 state 오브젝트 안에 있으면 state.response에 접근이 가능
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
