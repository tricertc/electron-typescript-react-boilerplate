import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

let win: BrowserWindow | null
const isDev = process.env.NODE_ENV !== 'production'

const createWindow = () => {
  win = new BrowserWindow({
    title: 'Electron Starter Kit',
    show: false
  })

  if (isDev) {
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
  } else {
    win.loadURL(
      url.format({
        pathname: path.resolve(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  win.on('ready-to-show', () => {
    win!.show()
  })

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform === 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
