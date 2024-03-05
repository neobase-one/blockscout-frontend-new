import { Skeleton } from '@chakra-ui/react';
import React from 'react';

import dayjs from 'lib/date/dayjs';
import IconSvg from 'ui/shared/IconSvg';
import TextSeparator from 'ui/shared/TextSeparator';

type Props = {
  // should be string, will be fixed on the back-end
  timestamp: string | number;
  isLoading?: boolean;
}

const DetailsTimestamp = ({ timestamp, isLoading }: Props) => {
  return (
    <>
      <IconSvg name="clock" boxSize={ 5 } color="text_secondary" isLoading={ isLoading }/>
      <Skeleton isLoaded={ !isLoading } ml={ 2 }>
        { dayjs(timestamp).fromNow() }
      </Skeleton>
      <TextSeparator color="text_secondary"/>
      <Skeleton isLoaded={ !isLoading } whiteSpace="normal">
        { dayjs(timestamp).format('llll') }
      </Skeleton>
    </>
  );
};

export default DetailsTimestamp;
