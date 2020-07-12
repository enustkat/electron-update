const { remote } = require("electron");
const { BrowserWindow } = remote;
const storage = require('node-sessionstorage')

let print_win;

function navigateTo(url) {
  document.querySelector("webview").src = url;
}

function getControlsHeight() {
  let controls = document.querySelector("#controls");
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
}

function homeButton() {
  document.querySelector("#home").onclick = () => {
    // remote.getCurrentWindow().close()
    let attribute = document.getElementById("webview");
    let home = attribute.getAttribute("data-home");
    navigateTo(home);
  };
}


function warningPopup() {

  var poppy = storage.getItem('popupOnce_');
  let elem = document.querySelector("#warning-modal-electron");

  if(!poppy){
    elem.style.display = "block";
  }

  document.querySelector("#warning-modal-continue-btn").onclick = () => {
    storage.setItem('popupOnce_', 'true')
    elem.style.display = "none";
  };

  document.querySelector("#warning-modal-back-btn").onclick = () => {
    remote.getCurrentWindow().close()
  };
  
  


 
}

function printButton() {
  document.getElementById("print_button").addEventListener("click", print);
}

function print() {
  let webview = document.querySelector("webview");
  print_win = new BrowserWindow({ "auto-hide-menu-bar": true });
  print_win.loadURL(webview.src);
  print_win.webContents.on("did-finish-load", () => {
    print_win.webContents.print();
  });
}


// $('#home').on('click', e => {
//   remote.getCurrentWindow().close();
// })

