import React from 'react';
import { Menu, Item } from '../styleComponents';
import { useScrollSections } from 'react-scroll-section';

const DynamicMenu = () => {
  const sections = useScrollSections();

  return (
    <Menu>
      {sections.map(({ id, onClick, selected }) => (
        <Item key={id} onClick={onClick} selected={selected}>
          {id.toUpperCase()}
        </Item>
      ))}
    </Menu>
  );
};

export default DynamicMenu;
