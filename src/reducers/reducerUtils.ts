export function createReducer(initialState: any, fnMap: any) {
  return (state = initialState, {type, payload}: any) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}

export function reduceReducers(...reducersArray: any) {
  return function (previousState: any, currentAction: any) {
    const reducerFunction = function (accumulator: any, currentReducer: any) {
      return currentReducer(accumulator, currentAction);
    };

    return reducersArray.reduce(reducerFunction, previousState);
  }
}
