import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const Input: React.FC<TextInputProps> = (props: TextInputProps) => {
  return <TextInput {...props} style={{ ...styles.input }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;