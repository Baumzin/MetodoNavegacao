import React from "react";
import { View, Text, Button } from 'react-native';
import styles from 'src/screens/DetailsScreenStyle';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Go to Profile'
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    )
}