import type { As } from '@chakra-ui/react';
import { Skeleton, Box, Button, Circle, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

const FilterIcon = (
  <IconSvg name="filter" boxSize={ 5 } mr={{ base: 0, lg: 2 }}/>
);

interface Props {
  isActive?: boolean;
  isLoading?: boolean;
  appliedFiltersNum?: number;
  onClick: () => void;
  as?: As;
}

const FilterButton = (
  { isActive, isLoading, appliedFiltersNum, onClick, as }: Props,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  const badgeColor = useColorModeValue('white', 'black');

  if (isLoading) {
    return (
      <Skeleton
        w={{ base: 9, lg: '78px' }}
        h={ 8 }
        borderRadius="base"
        flexShrink={ 0 }
      />
    );
  }

  return (
    <Button
      ref={ ref }
      rightIcon={
        appliedFiltersNum ? (
          <Circle bg="accent" size={ 5 } color={ badgeColor }>
            { appliedFiltersNum }
          </Circle>
        ) : undefined
      }
      size="sm"
      fontWeight="500"
      variant="outline"
      colorScheme="gray-dark"
      onClick={ onClick }
      isActive={ isActive }
      px={ 1.5 }
      flexShrink={ 0 }
      as={ as }
      color="text"
      borderColor="secondary_base"
      _hover={{ color: 'accent', borderColor: 'accent' }}
    >
      { FilterIcon }
      <Box display={{ base: 'none', lg: 'block' }}>Filter</Box>
    </Button>
  );
};

export default React.forwardRef(FilterButton);
