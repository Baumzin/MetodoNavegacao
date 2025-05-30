import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        backgroundColor: '#dda0dd', //cor de fundo do botão
        margin: 10,
        with: windowWidth * 0.5, //50% de largura da tela
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    textoLogin: {
        fontSize: 18,
    },
    deletarLogin: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default styles