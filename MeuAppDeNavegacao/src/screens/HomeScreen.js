import React from "react";
import { View, Text, Button, TouchableOpacity} from 'react-native';
import styles from "./HomeScreenStyle";
import verificaLogin from "../Logic/Login.js";

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
                style={{ backgroundColor: '#FF3B30', padding: 15, borderRadius: 8, alignItems: 'center' }}
                onPress={executaLogout}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}