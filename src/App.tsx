import React from 'react';
import Router from './Router';
import ThemeProvider from './theme/ThemeProvider';
import { initializeApp } from 'firebase/app';

import { appConfig } from './config/dev';

const App: React.FC = () => {
  initializeApp(appConfig.firebaseConfig);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
