import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers/rootReducer';
import { rootEpic } from '../epics/rootEpics';

export default function configureStore(preloadedState ?: any) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [thunk, epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancer = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancer);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  );

  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    if (module.hot) {
      // @ts-ignore
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      })
    }
  }

  epicMiddleware.run(rootEpic);

  return store;
}
