var electronInstaller = require('electron-winstaller');
var path = require('path');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './release-builds/evolvia-win32-ia32',

    // Specify the existing folder where
    outputDirectory: './Evolvia-installers',

    // The name of the executable of your built
    exe: 'evolvia.exe',
    setupExe: 'evolvia-win32-ia32.exe',

    // The application icon
    iconUrl: 'http://www.evolvia.com.tr/rp/favicon.ico',

    // The setup icon
    // setupIcon: path.join(__dirname, 'Icon.ico'),

    // Bu yazılmazsa Update.exe'yi de icon atamaya çalışıyor ve hata oluşuyor
    skipUpdateIcon: true,

    // Kurulum paketinin yüklenme hareketli resmi
    // loadingGif: path.join(__dirname, 'Setup.gif'),

    copyright: `Copyright © ${new Date().getFullYear()} Enustkat`,
};

var resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log('Kurulum paketi başarıyla oluşturuldu!');
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`);
});
