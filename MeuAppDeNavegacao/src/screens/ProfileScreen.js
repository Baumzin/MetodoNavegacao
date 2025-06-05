import { View, Text, Button } from 'react-native';
import styles from "./ProfileScreenStyle";
import stylesLogin from "./LoginScreenStyle.js";
import confirmaLogin from "../Logic/Login.js";

export default function ProfileScreen({ navigation }) {

    const { logout } = confirmaLogin();

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
                    title='Logout'
                    onPress={ executaLogout }
                    color={'red'}
                />
            
            </View>
        </View>
    );
}