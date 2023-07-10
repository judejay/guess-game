import { Text, StyleSheet, TextStyle } from 'react-native';
import colors from '../constants/colors';
import React, { ReactNode } from 'react';

interface TitleProps {
    style?: TextStyle;
    children: ReactNode;
}


const Title: React.FC<TitleProps> = ({style, children}) =>(
    <Text style={styles.title}>{children}</Text>
)

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
    }
})