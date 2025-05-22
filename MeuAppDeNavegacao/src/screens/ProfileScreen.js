import React from "react";
import { View, Text, Button,} from 'react-native';
import styles from "./ProfileScreenStyle";

export default function ProfileScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Home"
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Go to Details'
                    onPress={() => navigation.navigate('DetailsScreen')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Go Back'
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}