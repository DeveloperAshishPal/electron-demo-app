const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    // create browser window
    win = new BrowserWindow({width:720,height:520, icon: __dirname+'/images/icon.png' , resizable : false });
    win.setMenu(null);
    // load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    // load dev-tools
    //win.webContents.openDevTools();
    
    win.on('closed', () => {
        win = null;
    });
    
}

// run create window function
app.on('ready',createWindow);

// quit when all window is closed
app.on('window-all-closed', () => {
   if(process.platform !== 'darwin'){
       app.quit();
   } 
});

