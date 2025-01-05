import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Preferences = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

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

  //to toggle the button when clicked
  const togglePreference = (item: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(item)
        ? prev.filter((preference) => preference !== item)
        : [...prev, item]
    );
  };

  return (
    <LinearGradient
      colors={['#FFD700', '#F4DEB4', '#FFD700']}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Preference</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {preferenceList.map((item, index) => (
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
      <Text style={styles.defaultButtonText}>{item}</Text>
    </LinearGradient>
  </Pressable>
))}
        </ScrollView>
        <Pressable style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  defaultButton: {
    borderRadius: 20,
    margin: 5,
    overflow: 'hidden',
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  buttonGradient: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  defaultButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

