import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const stylesLogin = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'ff0000',
    },
    buttonContainer: {
        margin: 10,
        backgroundColor: 'ff0000',
        width: windowWidth * 0.5, //50% de largura da tela
        alignSelf: 'center',
        borderRadius: 5,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        height: 60,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    
    btnLogout: {
        
        backgroundColor: 'ff0000', 
        padding: 15,
        borderRadius: 5, 
        color: 'white',
    }
});

export default stylesLogin