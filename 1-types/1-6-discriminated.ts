{
  // 동일한 키와 하지만 state별로 다른 값을 가지고 있도록 만들어 구분 가능하게 해준다.
  // 아래 예시에는 result라는 공통의 키를 가지고 값을 다르게 해줘 구분해준다.
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
  // union에서 예시든거 보다 더 직관적으로 작성할 수 있고 읽을 때도 자연스럽게 읽을 수 있다.
  // union 타입을 사용할 때 어떤 케이스든 공통된 property를 가지고 있음으로써 조금더 구분하기 쉽게 만든다.
}
