/* eslint-disable react/react-in-jsx-scope */
import {Box, Center, ZStack} from 'native-base';
import {React} from 'react';

const Animation1 = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Center h="96">
        <ZStack alignItems="center" justifyContent="center">
          <Box size="64" rounded="lg"> </Box>
          <Box bg="indigo.300" size="32" rounded="lg" shadow={8} />
        </ZStack>
      </Center>;
  };

export default Animation1;
