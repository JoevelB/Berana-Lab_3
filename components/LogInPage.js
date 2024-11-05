import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LogInPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circleContainer}>
          <Image source={require('../assets/AppLogo.png')} style={styles.logo} resizeMode="cover" />
        </View>
        <Text style={styles.appName}>J3erana</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#3e7139" style={styles.icon} />
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          placeholderTextColor="#6b8f71"
        />
      </View>

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
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    top: 20,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    color: '#3e7139',
    paddingLeft: 40,
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
