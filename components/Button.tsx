import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Button;