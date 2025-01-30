import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';


export const Preferences = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [preferences, setPreferences] = useState([]);

  const preferenceList: string[] = [
    'Artificial Intelligence',
    'Cyber Security',
    'Cloud Computing',
    'Distributed Computing',
    'Web Development',
    'IOT',
    'Algorithm',
    'Robotics',
    'Designing Tools',
    'Developer Tools',
    'Data Science',
    'Space Research',
    'Machine Learning',
  ];

const fetchPreferences = () => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => setPreferences(response.data))
  .catch(error => console.log(error.message));
}



const savePreferences = () => {
  axios.post("https://jsonplaceholder.typicode.com/posts",{
  preferences:selectedPreferences
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error.message));
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
        </ScrollView>

        <Pressable style={styles.nextButton} onPress={savePreferences}>
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};









