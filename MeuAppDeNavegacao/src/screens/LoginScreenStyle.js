import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd0c6', //cor de fundo da tela
    },

    title: {
        fontSize: 24,
        margimBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#dda0dd', //cor de fundo do botão
        margin: 10,
        with: windowWidth * 0.5, //50% de largura da tela
        borderRadius: 5
    },

    input : {
        backgroundColor: '#eeeeee',
        margin: 10,
        width: 200, //50% de largura da tela
        borderRadius: 2
    },
});

export default styles