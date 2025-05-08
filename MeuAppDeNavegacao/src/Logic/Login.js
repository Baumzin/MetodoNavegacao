
export default function ValidarLogin(usuario, senha, navigation ){
    if(usuario == "admin" && senha == "1234"){
        navigation.navigate('HomeScreen');
        
    }else{
        alert("Senha ou Usuário Incorretos!");
    }
}