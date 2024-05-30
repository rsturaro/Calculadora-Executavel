//Importando módulos do pacote Electron
const {app, BrowserWindow} = require('electron');

//Janela principal
let mainWindow;

//"Ready" dispara quando inicializa o app
app.on('ready', () => {

    //Instânciando "BrowserWindow" a variável e definindo a largura e altura
    mainWindow = new BrowserWindow({
        width: 250,
        height: 450
    });

    //Linkando e carregando o HTML ao "mainWindow"
    //"__dirname__" variável Node.Js
    //"loadURL" Carregando arquivo local
    mainWindow.loadURL(`file://${__dirname}/index.html`)

});

//Importando "path" Node.js, trabalhando com caminhos e diretórios
const path = require('path');
//"Live Server" as mudanças são feitas sem ter que recarregar a aplicação
const electronReload = require('electron-reloader');

//Definindo o caminho para o arquivo principal do Electron "index.html"
const mainFile = path.join(__dirname, 'index.html');

//Inicializa com o módulo atual e configurações adicionais 
electronReload(module, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'), //Garante que o reloader utilize a instância correta do Electron nas dependências
    hardResetMethod: 'exit',
    forceHardReset: true, //Força um reset completo quando mudanças são feitas, recarregando o projeto
    debug: true, //Depuração
    watchRenderer: true, //Recarrega as janelas quando mudanças são feitas
    watchMain: true,
    argv: [mainFile],
});
