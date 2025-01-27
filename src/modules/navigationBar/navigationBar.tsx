import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const navigation = useNavigation();

  const handlePress = (screen: string) => {
    setSelectedTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => handlePress('Home')} style={styles.navItem}>
        <Ionicons
          name="home"
          size={20}
          color={selectedTab === 'Home' ? '#F3C331' : 'gray'}
        />
        <Text style={[styles.label, { color: selectedTab === 'Home' ? '#F3C331' : 'gray' }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Category')} style={styles.navItem}>
        <Ionicons
          name="grid" 
          size={20}
          color={selectedTab === 'Category' ? '#F3C331' : 'gray'}
        />
        <Text style={[styles.label, { color: selectedTab === 'Category' ? '#F3C331' : 'gray' }]}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Profile')} style={styles.navItem}>
        <Ionicons
          name="person"
          size={20}
          color={selectedTab === 'Profile' ? '#F3C331' : 'gray'}
        />
        <Text style={[styles.label, { color: selectedTab === 'Profile' ? '#F3C331' : 'gray' }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 8,
    left: 65,
    right: 20,
    height: 55,
    width: 250, 
    backgroundColor: '#ffffff',
    borderRadius: 30, 
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#F3C331',
   
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 1,
  },
  label: {
    fontSize: 10,
    marginTop: 2,
  },
});
