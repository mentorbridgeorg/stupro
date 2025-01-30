import React from 'react';
import { Box } from 'native-base';
import {Home} from '../../modules/Home/Homepage';
export const Homepage = () => {
  return (
    <>
    <Box >
     <Home/>
    </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#000',
  },
});
