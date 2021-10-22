import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { IconButton } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
const Bar = () => {
  return (
    <Flex
      ml="15px"
      mt="80px"
      position="fixed"
      zIndex={2}
      h="100vh"
      flexDirection="column"
    >
      <IconButton
        size="lg"
        fontSize="lg"
        aria-label={`Switch to  mode`}
        variant="ghost"
        color="current"
        icon={<AiFillHome />}
      />
      <IconButton
        size="lg"
        fontSize="lg"
        aria-label={`Switch to  mode`}
        variant="ghost"
        color="current"
        icon={<FaRegCompass />}
      />
      <IconButton
        size="lg"
        fontSize="lg"
        aria-label={`Switch to  mode`}
        variant="ghost"
        color="current"
        icon={<MdSubscriptions />}
      />
      <IconButton
        size="lg"
        fontSize="lg"
        aria-label={`Switch to  mode`}
        variant="ghost"
        color="current"
        icon={<MdVideoLibrary />}
      />
    </Flex>
  );
};

export default Bar;
