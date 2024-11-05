import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      {/* Username Input with Overlay Icon */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      {/* Email Input with Overlay Icon */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      {/* Password Input with Overlay Icon */}
      <View style={styles.inputContainer}>
        <Icon name="key" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      {/* Confirm Password Input with Overlay Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

      <Button mode="contained" onPress={() => {}} style={styles.signUpButton}>
        SIGN UP
      </Button>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('LogInPage')}>
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3e7139',
    marginBottom: 30,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    left: 22,
    top: 20, // Adjust based on the height of the TextInput
    zIndex: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#3e7139',
    paddingLeft: 40, // Space for the icon
  },
  signUpButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#6b8f71',
  },
  signInContainer: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 14,
    color: '#3e7139',
  },
  signInLink: {
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
