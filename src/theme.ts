import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    primaryDark: string;
    primaryMed: string;
    primaryLight: string;
    secondaryDark: string;
    secondaryMed: string;
    secondaryLight: string;
    transparent: string;
    black: string;
    white: string;
    gray: string;
  }
}

//ref: https://coolors.co/palette/cb997e-ddbea9-ffe8d6-b7b7a4-a5a58d-6b705c
const THEME = {
  background: '#F5F4E4',
  text: '#333',
  primaryDark: '#cb997eff',
  primaryMed: '#ddbea9ff',
  primaryLight: '#ffe8d6ff',
  secondaryDark: '#6b705cff',
  secondaryMed: '#a5a58dff',
  secondaryLight: '#b7b7a4ff',
  transparent: 'transparent',
  black: 'black',
  white: 'white',
  gray: '#495057'
};

export default THEME;
