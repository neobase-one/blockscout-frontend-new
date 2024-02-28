import { TagLabel, Tooltip, useColorMode } from '@chakra-ui/react';
import React from 'react';

import Tag from 'ui/shared/chakra/Tag';
import type { IconName } from 'ui/shared/IconSvg';
import IconSvg from 'ui/shared/IconSvg';

export type StatusTagType = 'ok' | 'error' | 'pending';

export interface Props {
  type: 'ok' | 'error' | 'pending';
  text: string;
  errorText?: string | null;
  isLoading?: boolean;
}

const StatusTag = ({ type, text, errorText, isLoading }: Props) => {
  const { colorMode } = useColorMode();

  let icon: IconName;
  let colorScheme;
  let color;
  let bgColor;

  switch (type) {
    case 'ok':
      icon = 'status/success';
      colorScheme = 'green';
      color = colorMode === 'dark' ? '#38A169' : '#38A169';
      bgColor = colorMode === 'dark' ? '#2C2C2C' : '#F0FFF4';
      break;
    case 'error':
      icon = 'status/error';
      colorScheme = 'red';
      break;
    case 'pending':
      icon = 'status/pending';
      // FIXME: it's not gray on mockups
      // need to implement new color scheme or redefine colors here
      colorScheme = 'gray';
      break;
  }

  return (
    <Tooltip
      label={ errorText }
      bgColor="bg_base"
      color="text"
      borderWidth="1px"
      borderColor="divider"
    >
      <Tag colorScheme={ colorScheme } display="flex" isLoading={ isLoading } color={ color } bgColor={ bgColor }>
        <IconSvg boxSize={ 2.5 } name={ icon } mr={ 2 } flexShrink={ 0 }/>
        <TagLabel display="block">{ text }</TagLabel>
      </Tag>
    </Tooltip>
  );
};

export default StatusTag;
