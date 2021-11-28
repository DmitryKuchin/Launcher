declare type LauncherAPI = typeof import('../preload/index').api;

// Для использования window.launcherAPI
declare interface Window {
    launcherAPI: LauncherAPI;
}

// Но можно использовать и просто launcherAPI
declare const launcherAPI: LauncherAPI;
