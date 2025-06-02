import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6', //cor de fundo da tela
    },

    title: {
        fontSize: 24,
        margimBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#ffebcd', //cor de fundo do botão
        margin: 10,
        width: windowWidth * 0.5, //50% de largura da tela
        borderRadius: 5
    },
});

export default styles