import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import type { AddressFromToFilter } from 'types/api/address';

import useIsInitialLoading from 'lib/hooks/useIsInitialLoading';
import FilterButton from 'ui/shared/filters/FilterButton';

interface Props {
  isActive: boolean;
  defaultFilter: AddressFromToFilter;
  onFilterChange: (nextValue: string | Array<string>) => void;
  isLoading?: boolean;
}

const AddressTxsFilter = ({ onFilterChange, defaultFilter, isActive, isLoading }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const isInitialLoading = useIsInitialLoading(isLoading);

  return (
    <Menu>
      <MenuButton>
        <FilterButton
          isActive={ isOpen || isActive }
          isLoading={ isInitialLoading }
          onClick={ onToggle }
          appliedFiltersNum={ isActive ? 1 : 0 }
          as="div"
        />
      </MenuButton>
      <MenuList zIndex={ 2 } bgColor="bg_base" borderColor="divider">
        <MenuOptionGroup defaultValue={ defaultFilter || 'all' } title="Address" type="radio" onChange={ onFilterChange }>
          <MenuItemOption value="all" bgColor="bg_base" borderColor="divider" _hover={{
            bgColor: 'divider',
          }}>All</MenuItemOption>
          <MenuItemOption value="from" bgColor="bg_base" borderColor="divider" _hover={{
            bgColor: 'divider',
          }}>Outgoing transactions</MenuItemOption>
          <MenuItemOption value="to" bgColor="bg_base" borderColor="divider" _hover={{
            bgColor: 'divider',
          }}>Incoming transactions</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default React.memo(AddressTxsFilter);
