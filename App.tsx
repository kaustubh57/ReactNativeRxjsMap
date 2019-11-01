import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import RootNavigator from './src/navigators/RootNavigator';
import configureStore from './src/store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <RootNavigator/>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
