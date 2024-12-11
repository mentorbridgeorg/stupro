import React from 'react';
import { NativeBaseProvider, Box, Text, Stack, HStack, View, Flex, Icon, IconButton } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsCard from './DetailsCard';
import ExampleIcons from './ExampleIcons';
const Stacks = createStackNavigator();

function HomeScreen({ navigation }) {
const exampleIcons= ExampleIcons();

const selectedIcon = exampleIcons[2].icon; 

  return (
      <NativeBaseProvider>
        <Box p="4">
          <DetailsCard />
        <View margin="auto" >
         <TouchableOpacity onPress={() => navigation.navigate('Details')}>
         <HStack space="3" px="4" pb="4">
      <IconButton
      icon={selectedIcon} _light={{ color: 'emerald.800' }} _dark={{ color: 'emerald.300' }} />
          <Text _light={{ color: 'emerald.800' }} _dark={{ color: 'emerald.300' }}>
            Find out more
          </Text>
        </HStack>
        </TouchableOpacity>
        </View>
        </Box>
      </NativeBaseProvider>
  );
}

const DetailsScreen = () => (
  <NativeBaseProvider>
    <Box p="4">
      <Text fontSize="lg">This is the Details Page</Text>
    </Box>
  </NativeBaseProvider>
);

const App = () => (
  <NavigationContainer>
    <Stacks.Navigator>
      <Stacks.Screen name="Home" component={HomeScreen}/>
      <Stacks.Screen name="Details" component={DetailsScreen}/>
    </Stacks.Navigator>
  </NavigationContainer>
);
//   );
// };
// };

export default App;
