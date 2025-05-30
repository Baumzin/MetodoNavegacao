import React, { useEffect } from "react";
import { View, Text, Button, TextInput,} from 'react-native';
import { useState } from "react";
import styles from './LoginScreenStyle.js';
import verificaLogin from '../Logic/Login.js';


export default function LoginScreen({ navigation }){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const { login, estaLogado, jaLogouAntes } = verificaLogin();

    useEffect(() => {
        if(estaLogado){
            navigation.navigate('HomeScreen');
        }
    }, [estaLogado]);

    const executaLogin = async () => {
        const sucesso = await login(usuario, senha);

        if(sucesso){
            navigation.navigate('HomeScreen');
        } else {
            alert("Erro! Usuário ou senha incorretos");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{jaLogouAntes ? 'Login' : 'Primeiro Acesso'}</Text>
            <TextInput 
                style={styles.input}
                placeholder="Insira seu usuário"
                keyboardType="default"
                value={usuario}
                onChangeText={text => setUsuario(text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Insira sua senha"
                secureTextEntry={true} //dessa forma, ainda permanece com o teclado padrão porém o que for digitado é ocultado por pontinhos pretos
                value={senha}
                onChangeText={text => setSenha(text)}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Validate Login"
                    onPress={ executaLogin() }
                />
            </View>
        </View>
    )
}