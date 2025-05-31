import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const stylesLogin = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        backgroundColor: '#dda0dd', //cor de fundo do botão
        margin: 10,
        width: windowWidth * 0.5, //50% de largura da tela
        alignSelf: 'center',
        borderRadius: 10
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
    logout: {
        color: 'white',
        fontSize: 16,
    },
    btnLogout: {
        backgroundColor: '#FF3B30', 
        padding: 15, 
        borderRadius: 8, 
        alignItems: 'center'
    }
});

export default stylesLogin