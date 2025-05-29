import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ValidarLogin(usuario, senha, navigation ){
    const [login, setLogin] = useState("");
    const [logins, setLogins] = useState("");
  
    //função para salvar os logins no AsyncStorage
    const salvarLogins = async (loginsArray) => {
      try {
        await AsyncStorage.setItem('logins', JSON.stringify(loginsArray));
      } catch (error){
        console.log("Erro ao efeutar o login: ", error);
      }
    };
  
    //função para carregar tarefas ao iniciar o app
    const carregarLogins = async () => {
      try {
        const loginsArmazenados = await AsyncStorage.getItem('logins');
        if(loginsArmazenados !== null){
          setTasks(JSON.parse(loginsArmazenados));
        }
      } catch(error) {
        console.log("Erro ao carregar os logins: ", error);
      }
    }
  
    //função que adiciona um novo login
    const adicionaLogin = () => {
      if(task.trim() !== ""){
        const novosLogins = [...logins, login];
        setLogins(novosLogins);
        salvarLogins(novosLogins); //salva a lista atualizada
        setLogin(""); //limpa o campo de entrada
      }
    };
  
    //carrega os logins ao iniciar o aplicativo
    useEffect(() => {
      carregarLogins();
    }, []);
  
    if(usuario == "admin" && senha == "1234"){
        navigation.navigate('HomeScreen');
        
    }else{
        alert("Senha ou Usuário Incorretos!");
    }
}