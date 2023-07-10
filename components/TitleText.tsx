import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface TitleTextProps {
  style?: TextStyle;
  children: ReactNode;
}

const TitleText: React.FC<TitleTextProps> = ({ style, children }) => (
  <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default TitleText;