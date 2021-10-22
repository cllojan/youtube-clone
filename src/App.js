import React from 'react';
import Videos from './components/Videos';
import { FaYoutube } from 'react-icons/fa';
import { SiYoutubestudio } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiMicrophone } from 'react-icons/bi';
import { MdNotifications, MdApps } from 'react-icons/md';
import Bar from './components/Bar';
import { useColorModeValue, IconButton } from '@chakra-ui/react';

import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Grid,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const SwitchIcon = useColorModeValue(GiHamburgerMenu);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <Flex
            p={3}
            position="fixed"
            zIndex={2}
            w="100%"
            h="60px"
            bg="rgba(.2)"
            justifyContent={{ sm: 'normal', md: 'space-between' }}
          >
            <Flex justifyContent="space-around">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<SwitchIcon />}
              />

              <Button
                bg="transparent"
                leftIcon={<FaYoutube size="30px" bg="#000" />}
                variant="solid"
              >
                Youtube
              </Button>
            </Flex>
            <Flex>
              <InputGroup
                display={{ sm: 'none', md: 'block' }}
                size="md"
                sx={{
                  width: '500px',
                  md: '40px',
                }}
              >
                <Input pr="4.5rem" placeholder="Buscar" />
                <InputRightElement>
                  <Button
                    h="1.75rem"
                    size="sm"
                    mr={3}
                    bg="none"
                    onClick={e => console.log(e)}
                  >
                    <i className="fas fa-search"></i>
                  </Button>
                </InputRightElement>
              </InputGroup>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<BiMicrophone />}
              />
            </Flex>
            <Flex>
              <IconButton
                display={{ sm: 'block', md: 'none' }}
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<i className="fas fa-search"></i>}
              />
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<SiYoutubestudio />}
              />
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<MdApps />}
              />
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to  mode`}
                variant="ghost"
                color="current"
                marginLeft="2"
                icon={<MdNotifications />}
              />

              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>
          </Flex>

          <VStack flexDirection="row" spacing="40px">
            <Bar />

            <Videos />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
