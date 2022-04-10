
import React from 'react';
import { ScrollingProvider } from 'react-scroll-section';
import { BreakpointProvider } from 'react-socks';
import DynamicMenu from './components/Menu';
import Sections from './components/Sections';

const App = (props: any) => {

  return (
    <ScrollingProvider >
      <BreakpointProvider>
        <DynamicMenu />
        <Sections />
      </BreakpointProvider>
    </ScrollingProvider>
  );
};

export default App;
