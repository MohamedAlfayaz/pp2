import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Disable GPU to avoid Chromium VSync issues
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,       
    frame: false,            
    autoHideMenuBar: true,  
    webPreferences: {
      contextIsolation: true,
    },
  });

  // ✅ This works for both dev and packaged builds
  win.loadFile(path.join(__dirname, "../dist/index.html"));
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
