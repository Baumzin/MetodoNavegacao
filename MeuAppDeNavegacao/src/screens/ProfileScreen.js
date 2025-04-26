import React from "react";
import { View, Text, Button,} from 'react-native';
import styles from "src/screens/ProfileScreenStyles";

export default function ProfileScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Go to Details'
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    );
}