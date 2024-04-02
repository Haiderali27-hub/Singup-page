import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/little-lemon-logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.subText}>Little Lemon, your local{"\n"} Mediterranean Bistro</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : styles.button
        ]}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: 'white',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust as necessary
    height: 200, // Adjust as necessary
    resizeMode: 'contain',
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#3B3C36',
    fontWeight: 'bold',
    marginTop: 70, // Adjust as necessary
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#607d8b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignSelf: 'stretch',
    marginHorizontal: 16,
  },
  buttonPressed: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#455a64',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignSelf: 'stretch',
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;