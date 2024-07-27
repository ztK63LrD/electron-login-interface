import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 320,
    height: 450,
    show: false,
    frame: false, // 无边框模式
    resizable: false, // 不可缩放
    autoHideMenuBar: true, // 自动隐藏菜单栏
    maximizable: false, // 不可最大化
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false, // 沙盒模式，默认是 true
      nodeIntegration: true, // 默认是 false, 设置为 true 可以使用 nodejs 的 API
      contextIsolation: false, // 默认是 true, 设置为 false 可以使用 remote 模块
    }
  })


  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  // 获取版本数据
  ipcMain.handle('getVersion', () => {
    const versions = {
      electron: process.versions.electron,
      node: process.versions.node,
      chrome: process.versions.chrome,  // 如果需要的话，也可以获取 Chrome 的版本
    };
    return versions;

  })
  // 关闭窗口
  ipcMain.on('close-main-window', (event) => {
    event.preventDefault()
    mainWindow.close()
  })

  // 登录页窗口大小
  ipcMain.handle('login-window-size', () => {
    mainWindow.setSize(320, 450) // 设置窗口大小
    mainWindow.setMinimizable(true) // 允许最小化窗口
    mainWindow.center() // 居中窗口
    mainWindow.setResizable(false) // 允许窗口缩放, 默认是 false
  })
  // 首页窗口大小
  ipcMain.handle('home-window-size', () => {
    mainWindow.setSize(800, 600) // 设置窗口大小
    mainWindow.setMaximizable(true) // 允许最大化窗口
    mainWindow.center() // 居中窗口
    mainWindow.setResizable(true) // 允许窗口缩放, 默认是 false
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.setSize(320, 450) // 设置窗口大小
    mainWindow.setMinimizable(true) // 允许最小化窗口
    mainWindow.center() // 居中窗口
    mainWindow.setResizable(false) // 允许窗口缩放, 默认是 false
    mainWindow.show()
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
