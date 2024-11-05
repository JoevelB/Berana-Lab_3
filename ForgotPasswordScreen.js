import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <Text style={styles.instructionText}>
        Enter your email address below, and we'll send you a link to reset your password.
      </Text>

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

      <Button mode="contained" onPress={() => {}} style={styles.resetButton}>
        Send Reset Link
      </Button>

      <View style={styles.backContainer}>
        <Text style={styles.backText}>
          Remembered your password?{' '}
          <Text style={styles.backLink} onPress={() => navigation.navigate('LogInPage')}>
            Log In
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
    marginBottom: 20,
  },
  instructionText: {
    textAlign: 'center',
    fontSize: 16,
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
  resetButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#6b8f71',
  },
  backContainer: {
    marginTop: 20,
  },
  backText: {
    fontSize: 14,
    color: '#3e7139',
  },
  backLink: {
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
