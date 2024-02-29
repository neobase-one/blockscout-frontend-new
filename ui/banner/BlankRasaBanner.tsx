import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

type BlankRasaBannerProps = {
  block?: boolean;
};

const BlankRasaBanner = ({ block }: BlankRasaBannerProps) => {
  const bgColor = useColorModeValue('light', '#171717');
  const bgBoxShadowDesktop = useColorModeValue(
    '0px 8px 16px -5px rgba(0, 0, 0, 0.10)',
    '0px 8px 16px -5px rgba(6, 252, 153, 0.10)',
  );
  const imgInvertFilter = useColorModeValue('invert(0)', 'invert(1)');

  return (
    <Box
      p={ 5 }
      h={ block ? undefined : '100%' }
      w={ [ 'full', block ? '100%' : '40%' ] }
      bg={ bgColor }
      boxShadow={ bgBoxShadowDesktop }
      borderRadius="md"
      display="flex"
      alignItems={ [ '', block ? 'center' : '' ] }
      justifyContent="space-between"
      flexDirection={ [ 'column', block ? 'row' : 'column' ] }
    >
      <Flex
        flexGrow="1"
        flexDirection={ [ 'column', block ? 'row' : 'column' ] }
        alignItems={ [ '', block ? 'center' : '' ] }
        gap={ block ? 5 : 2 }
      >
        <Image
          src="/static/bank-rasa-logo.png"
          w={ [ '90px', block ? '100px' : '90px' ] }
          h={ [ '90px', block ? '100px' : '90px' ] }
          alt="blank-rasa-logo-loading..."
          filter={ imgInvertFilter }
        />
        <Box flexGrow="1">
          <Heading as="h2" size="md" mb={ 2 } color="text" fontWeight="medium">
            Blank Rasa
          </Heading>
          <Text fontSize="sm" color="text_secondary">
            A platform for discovering and trading NFTs on Canto.
          </Text>
          <Text fontSize="sm" color="text_secondary">
            Features collections such as Canto Longnecks, Shnoises, and more.
          </Text>
        </Box>
        <Link href="https://www.blankrasa.com" isExternal>
          <Button
            bg="transparent"
            _hover={{
              bg: 'accent',
              color: 'text_on_accent',
            }}
            fontWeight="medium"
            colorScheme="accent"
            p={ 4 }
            mt={ block ? 0 : 3 }
            width={ [ '100%', block ? '270px' : '100%' ] }
            fontSize="sm"
            variant="outline"
            borderWidth="1.5px"
          >
            Explore More
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default BlankRasaBanner;
