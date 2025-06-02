import React from "react";
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from "./ProfileScreenStyle";
import stylesLogin from "./LoginScreenStyle.js";
import verificaLogin from "../Logic/Login.js";

export default function ProfileScreen({ navigation }) {

    const { logout } = verificaLogin();

    const executaLogout = async () => {
        await logout();
        navigation.navigate('LoginScreen');
    };

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
            <View style={stylesLogin.buttonContainer}>
                <Button
                    title='Sair'
                    onPress={ executaLogout }
                    color={'red'}
                />
            
            </View>
        </View>
    );
}