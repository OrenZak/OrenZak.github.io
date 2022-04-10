import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

export const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
`;

export const Item = styled.li<{ selected: boolean }>`
display:table-cell;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 25px 10px;
  font-size: 3vw;
  font-weight: bold;
  user-select: none;
  color: ${(props) => (props.selected ? props.theme.black : props.theme.gray)};
  border-top: 5px solid ${(props) => (props.selected ? props.theme.black : props.theme.transparent)};
`;

export const SectionContainer = styled.section<{
  background?: keyof DefaultTheme;
}>`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  scroll-behavior: smooth;
  position: 'relative';
  background: ${(props) => props.theme[props?.background ?? 'background']};
  font-family: 'Fira Code', monospace;
`;

export const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
`;


export const AnimatedLine = styled.div<{ percentage: number }>`
  width: 100%;
  height: 8px;
  background: #e6e6e6;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px 0 rgba(7, 33, 66, 0.15);

  &:after {
  animation-delay: 2s;
  animation: ratio90 1.5s forwards;
  background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 10px;
  width: ${(props) => `${props.percentage}%`}
}`
