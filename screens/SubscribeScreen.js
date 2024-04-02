import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import validateEmail from '../utils/index'; 
import { Image } from 'react-native';


const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (validateEmail(email)) { // Changed from index to validateEmail
      Alert.alert('Subscription', 'Thanks for subscribing, stay tuned!');
    } else {
      Alert.alert('Error', 'Please enter a valid email address');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Subscribe',
      headerTitleAlign: 'center',
    });
  }, [navigation]);
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
      />
      <Text style={styles.header}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Type your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: validateEmail(email) ? '#455a64' : '#ccc' // Changed from index to validateEmail
          },
          pressed && styles.pressedButton
        ]}
        onPress={handleSubscribe}
        disabled={!validateEmail(email)} // Changed from index to validateEmail
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    width: '100%',
  },
  button: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // Other button styles...
  },
  pressedButton: {
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    // Other text styles...
  },
  logo: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    resizeMode: 'contain', // Keep the image's aspect ratio
    marginBottom: 20,
  },
  
});

export default SubscribeScreen;
