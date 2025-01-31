import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Preferences.styles';
import { fetchData, sendData } from '@/api';



export const Preferences = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [preferences, setPreferences] = useState([]);

const fetchPreferences = () => {
  fetchData("https://jsonplaceholder.typicode.com/posts")
  .then((response) => setPreferences(response));
}
const savePreferences = () => {
  sendData("https://jsonplaceholder.typicode.com/posts",{
  preferences:selectedPreferences
  })
  .then((response)=>console.log(response));
};

useEffect(()=>{
  fetchPreferences();
}, [])

  const togglePreference = (item: string) => {
    if (selectedPreferences.includes(item)) {
      setSelectedPreferences((prev) =>
        prev.filter((preference) => preference !== item)
      );
    } else {
      if (selectedPreferences.length < 5) {
        setSelectedPreferences((prev) => [...prev, item]);
      }
    }
  };

  return (
    <LinearGradient
      colors={['#FFD700', '#F4DEB4', '#FFD700']}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Preference</Text>
        <Text style={styles.limitMessage}>You can choose up to 5 Preferences!</Text>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {preferences.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => togglePreference(item)}
              style={[
                styles.defaultButton,
                selectedPreferences.includes(item) && styles.selectedButton,
              ]}
            >
              <LinearGradient
                colors={
                  selectedPreferences.includes(item)
                    ? ['#FFFFFF','#FFD600', '#FFFFFF'] //gradient colors for selected buttons
                    : ['#FFFFFF', '#FFFFFF']
                }
                //for vertical gradient of button
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.defaultButtonText}>{item.id}</Text>
              </LinearGradient>
            </Pressable>
          ))}
       

        <Pressable style={styles.nextButton} onPress={savePreferences}>
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
