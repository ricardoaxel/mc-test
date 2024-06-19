import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {ThemeProvider} from 'styled-components/native';

import {CommonTheme} from '../atomic/theme';
import Navigation from './Navigation';

const App: FC = () => {
  return (
    <ThemeProvider theme={CommonTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
