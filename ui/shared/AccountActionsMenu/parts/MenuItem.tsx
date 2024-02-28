import { MenuItem as MenuItemChakra, chakra } from '@chakra-ui/react';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MenuItem = ({ className, children, onClick }: Props) => {
  return (
    <MenuItemChakra className={ className } onClick={ onClick } py={ 2 } px={ 4 }>
      { children }
    </MenuItemChakra>
  );
};

export default chakra(MenuItem);
