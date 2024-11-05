import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LogInPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circleContainer}>
          <Image source={require('./assets/AppLogo.png')} style={styles.logo} resizeMode="cover" />
        </View>
        <Text style={styles.appName}>J3erana</Text>
      </View>

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

      <Text style={styles.forgotPasswordText} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        Forgot Password?
      </Text>
      <Button mode="contained" onPress={() => {}} style={styles.signInButton}>
        SIGN IN
      </Button>

      <Text style={styles.signUpText}>
        DON’T HAVE AN ACCOUNT?{' '}
        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUpScreen')}>
          Sign up
        </Text>
      </Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  circleContainer: {
    width: 100, // Width of the circle
    height: 100, // Height of the circle
    borderRadius: 50, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Optional: set background color
    shadowColor: '#000', // Optional: add shadow for better visibility
    shadowOffset: { width: 0, height: 2 }, // Optional: adjust shadow offset
    shadowOpacity: 0.2, // Optional: adjust shadow opacity
    shadowRadius: 4, // Optional: adjust shadow radius
    elevation: 5, // Optional: for Android shadow
    overflow: 'hidden', // Ensures the logo fits perfectly inside the circle
  },
  logo: {
    width: '100%', // Occupy the full width of the circle
    height: '100%', // Occupy the full height of the circle
    // Ensure the logo scales correctly
    resizeMode: 'cover', // Use cover to fill the circle without distortion
  },
  appName: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3e7139',
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
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: '#3e7139',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
  },
  signInButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#6b8f71',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    color: '#3e7139',
  },
  signUpLink: {
    fontWeight: 'bold',
  },
});

export default LogInPage;
