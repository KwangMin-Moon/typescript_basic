{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`😄${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  // 굳이 뭔가를 리턴해주지 않아도 되는데 return을 썼다.
  // function printLoginState(state: ResourceLoadState) {
  //   switch (state.state) {
  //     case 'loading':
  //       return console.log(state.state);
  //     case 'success':
  //       return console.log(state.response.body);
  //     case 'fail':
  //       return console.log(state.reason);
  //     default:
  //       throw new Error('unknown state');
  //   }
  // }
}
