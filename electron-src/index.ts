// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import puppeteer from 'puppeteer';

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js'),
    },
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: join(__dirname, '../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
      })

  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

ipcMain.on('capture', async (event: IpcMainEvent, url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const buffer = await page.screenshot({
    path: 'screenshot.png',
  });
  browser.close();
  event.sender.send('screenshot', buffer.toString('base64'));
})
