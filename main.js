'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

// 画面がすべて閉じたらアプリを終了する
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

    // ブラウザ(Chromium)の起動, 400 * 300
    mainWindow = new BrowserWindow({width:300, height: 400});
    // 最初に読み込む画面のパスを指定
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
