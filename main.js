const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const urlLoaction = isDev ? "http://localhost:3000" : "dummyUrl";
  mainWindow.loadURL(urlLoaction);
});
