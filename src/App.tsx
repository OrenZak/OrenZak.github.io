
import React from 'react';
import { ScrollingProvider } from 'react-scroll-section';
import DynamicMenu from './components/Menu';
import Sections from './components/Sections';

const App = (props: any) => {

  return (
    <ScrollingProvider >
      <DynamicMenu />
      <Sections/>
    </ScrollingProvider>
  );
};

export default App;
