const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const applicationMenu = require('./menu')

const appIcon = path.join(__dirname, 'appIcon.png')
const appName = 'Time Tracker'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let tray

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800, // 400
    height: 600, // 520
    title: appName,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  isDev ? mainWindow.loadURL('http://localhost:3000') : mainWindow.loadFile('build/index.html')
  mainWindow.webContents.toggleDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
    tray = null
  })
}

app.on('ready', async () => {
  createWindow()
  tray = new Tray(appIcon)
  tray.setToolTip(appName)

  const menu = Menu.buildFromTemplate(applicationMenu(appName, mainWindow))
  Menu.setApplicationMenu(menu)

  const desktopIdle = require('desktop-idle')
  setInterval(() => {
    console.log(desktopIdle.getIdleTime()) // Should print 600 seconds (10 min) after 10 min inactivity
  }, 60000)
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (e, commandLine, workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}
