import { View, Text, Button, TextInput,} from 'react-native';
import { useState } from "react";
import stylesLogin from './LoginScreenStyle.js';
import verificaLogin from '../Logic/Login.js';

export default function LoginScreen({ navigation }){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = verificaLogin();

    const executaLogin = async () => {
        //a variável successo aguarda o return da funçao login para ser definida
        const sucesso = await login(usuario, senha);

        //se verdadeiro, libera a passagem para a HomeScreen
        if(sucesso){
            navigation.navigate('HomeScreen');
        } else {
            alert("Erro! Usuário ou senha incorretos");
        }
    };

    return (
        <View style={stylesLogin.container}>
            <Text style={stylesLogin.title}>Login</Text>
            <TextInput 
                style={stylesLogin.input}
                placeholder="Insira seu usuário"
                keyboardType="default"
                value={usuario}
                onChangeText={text => setUsuario(text)}
            />
            <TextInput 
                style={stylesLogin.input}
                placeholder="Insira sua senha"
                secureTextEntry={true} //dessa forma, ainda permanece com o teclado padrão porém o que for digitado é ocultado por pontinhos pretos
                value={senha}
                onChangeText={text => setSenha(text)} //atualiza constantemente a variável setSenha conforme o usuário for digitando
            />
            <View style={stylesLogin.buttonContainer}>
                <Button
                    title="Validate Login"
                    onPress={ executaLogin }
                />
            </View>
        </View>
    )
}