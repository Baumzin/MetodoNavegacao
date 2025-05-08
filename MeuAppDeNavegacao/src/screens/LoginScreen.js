import React from "react";
import { View, Text, Button, TextInput,} from 'react-native';
import { useState } from "react";
import styles from './LoginScreenStyle.js';
import ValidarLogin from "../Logic/Login";

export default function LoginScreen({ navigation }){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
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
                    onPress={() => ValidarLogin(usuario, senha, navigation)}
                />
            </View>
        </View>
    )
}