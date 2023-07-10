import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
  style?: TextStyle;
  children:ReactNode;
}

const BodyText: React.FC<Props> = ({ style, children }) => (
  <Text style={{ ...styles.body, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;