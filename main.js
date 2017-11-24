'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

const Config = require('electron-config');

const config = new Config({
	defaults: {
		bounds: {
			width: 800,
			height: 600,
		},
	},
})

var mainWindow = null;
var bounds_info;

// 画面がすべて閉じたらアプリを終了する
app.on('window-all-closed', function() {
	if (process.platform != 'darwin')
	app.quit();
});

app.on('ready', function() {

	const {width, height, x, y} = config.get('bounds');
	// ブラウザ(Chromium)の起動, 400 * 300
	mainWindow = new BrowserWindow({width, height, x, y});
	// 最初に読み込む画面のパスを指定
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	mainWindow.on('close', function() {
		config.set('bounds', mainWindow.getBounds());
	});
});
