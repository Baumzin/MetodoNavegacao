import React from "react";
import { View, Text, Button, TouchableOpacity} from 'react-native';
import styles from "./HomeScreenStyle";
import verificaLogin from "../Logic/Login.js";
import stylesLogin from "./LoginScreenStyle.js";

export default function HomeScreen({ navigation }) {
    const { logout } = verificaLogin();

    const executaLogout = async () => {
        await logout();
        navigation.navigate('LoginScreen');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('DetailsScreen')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Go to Profile'
                    onPress={() => navigation.navigate('ProfileScreen')}
                />
            </View>
            <TouchableOpacity
                style={stylesLogin.btnLogout}
                onPress={executaLogout}
            >
                <Text style={stylesLogin.logout}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}