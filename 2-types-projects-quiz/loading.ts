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
        console.log(`π${state.response.body}`);
        break;
      case 'fail':
        console.log(`π±${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // π loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // π loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // π± no network

  // κ΅³μ΄ λ­κ°λ₯Ό λ¦¬ν΄ν΄μ£Όμ§ μμλ λλλ° returnμ μΌλ€.
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
