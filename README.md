# Projeto de introdução a troca de telas com React Native

## Como ter o meu projeto em sua máquina

### Clone meu repositório

- Para isso, execute em seu terminal:

```
bash

git clone https://github.com/Baumzin/MetodoNavegacao
```

E após clonar, entre pelo terminal até o diretório do projeto, através do comando cd:

```
bash

cd NomeDoDiretorio
```

## Verificando pacotes

### Tenha o Expo e o Npm instalados

- Para isso você pode ir até seu terminal e digitar:

```
 bash

 npm -v
 ```

 Caso não tenha o NPM instalado, pode haver a possibilidade de voce não ter o node.js instalado. Para conferir se ele já está instalado em sua máquina, realize o comando:

```
bash

node -v
```

Se ele mostrar sua versão, quer dizer que ele está instalado em sua máquina! Caso contrário, voce pode instalar o arquivo do node através [do site de Download](https://nodejs.org/en/download) e baixar o arquivo do node. Para configurá-lo é simples, basta ir concordando e ir apertando em next (isso serve para uma configuração simples do node). Se tiver dúvidas em como instalar o node em seu Windows, [assista esse vídeo!](https://youtu.be/-jft_9PlffQ?si=_AW99RXz9C_miYkO)

Após ter o node instalado, para baixar o npm digite em seu teriminal:

 ```
 bash

 npm install
 ```

- Para conferir se tem o expo instalado, digite:

 ```
 bash

 expo --version
 ```

 Caso não tenha o Expo instalado, digite no terminal do seu repositório clonado:

 ```
 bash

 npm install expo-cli
 ```

 Se preferir, insira o ```-g``` após o ```expo-cli``` para instalar o expo no modo global, ou seja, que torne os comandos do expo executáveis onde você pode usar na linha de comando, independentemente do seu projeto atual.

## Execute o projeto clonado

 Para isso, insira o comando:

 ```
 bash

 npx expo start --tunnel
 ```

 o ```--tunnel``` é importante caso sua máquina que esteja rodando o projeto não esteja conectada na mesma internet, possibilitando assim você executar o projeto mesmo em redes diferentes

## Para acessar a tela de login

- Usuário: **admin**
- Senha: **1234**
