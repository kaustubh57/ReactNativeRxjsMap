import { createReducer } from './reducerUtils';

const initialState = {
  data: 12
};

function testReducer(state = initialState, action: any) {
  return state;
}

export default createReducer(initialState,
  {}
);
