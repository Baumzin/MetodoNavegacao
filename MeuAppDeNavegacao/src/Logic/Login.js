import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function confirmaLogin() {
  //criando as chaves que irão confirmar o estado de login
  const [estaLogado, setEstaLogado] = useState(false);

  //criando a função que confirma se já logou antes ou se está logado (useEffect indica listener de Evento)
  useEffect(() => {
    const confirmaLogin = async () => {
      //a função confirmaLogin cria as variável "estaLogado" que é falsa e transforma ela como true
      try {
        const estaLogado = await AsyncStorage.getItem("estaLogado");

        setEstaLogado(estaLogado === "true")


      } catch (erro) {
        console.log("Erro ao confirmar o login: ", erro);
      }
    };

    confirmaLogin();
  }, []);

  //Aqui, a função login tem os parâmetros usuario e senha vindos de LoginScreen para a verificação do login
  const login = async (usuario, senha) => {
    if (usuario === "Admin" && senha === "1234") {
      //se correto, estaLogado vira true
      setEstaLogado(true);

      //pede para aguardar setar no asyncStorage como true
      await AsyncStorage.setItem("estaLogado", "true");

      return true;

    } else {
      return false;
    }
  }

  const logout = async () => {
    //se quiser sair, setará estaLogado como falso no AsyncStorage 
    setEstaLogado(false);
    await AsyncStorage.setItem("estaLogado", "false");
  };

  return {estaLogado, login, logout};


}