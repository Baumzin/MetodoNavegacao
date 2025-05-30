import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function verificaLogin() {
  //criando as chaves que irao verificar o esstado de login
  const [estaLogado, setEstaLogado] = useState(false);
  const [jaLogouAntes, setJaLogouAntes] = useState(false);

  //criando a funçao que verifica se ja logou antes ou se esta logado
  useEffect(() => {
    const verificaLogin = async () => {
      try {
        const estaLogado = await AsyncStorage.getItem("estaLogado");
        const jaLogouAntes = await AsyncStorage.getItem("jaLogouAntes");

        setEstaLogado(estaLogado === "true")
        setJaLogouAntes(jaLogouAntes === "true");

      } catch (error) {
        console.log("Erro ao verificar o login: ", error);
      }
    };

    verificaLogin();
  }, []);

  const login = async (usuario, senha) => {
    if (usuario === "admin" && senha === "1234") {
      setEstaLogado(true);
      setJaLogouAntes(true);

      await AsyncStorage.setItem("estaLogado", "true");
      await AsyncStorage.setItem("jaLogouAntes", "true");

      return true;

    } else {
      return false;
    }
  }

  const logout = async () => {
    setEstaLogado(false);
    await AsyncStorage.setItem("estaLogado", "false");
  };

  return {estaLogado, jaLogouAntes, login, logout};


}