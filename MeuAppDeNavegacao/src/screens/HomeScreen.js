import { View, Text, Button, TouchableOpacity} from 'react-native';
import styles from "./HomeScreenStyle";
import verificaLogin from "../Logic/Login.js";

export default function HomeScreen({ navigation }) {
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
        </View>
    );
}