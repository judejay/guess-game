import { Text, StyleSheet, TextStyle } from 'react-native';
import colors from '../constants/colors';
import { ReactNode } from 'react';

interface InstructionTextProps {
    style?: TextStyle;
    children: ReactNode;
}

const InstructionText: React.FC<InstructionTextProps> =({style, children}) => (
    <Text style={styles.instructionText}>{children}</Text>
)


const styles = StyleSheet.create({
    instructionText: {
        fontFamily : 'open-sans',
        color: "blue",
        fontSize:24,
    }
})