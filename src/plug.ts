/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-12-16 19:11:40
 * @Description: 
 * @FilePath: /myindex/src/plug.ts
 */

import { App } from "vue";
import { appList,appconfig,appInfo,plug_option } from "./packages/appconfig";
import Win from "./packages/Win.vue"
import { Plugin } from 'vue'


let plug:Plugin = {
    install:function(app:App, opt: plug_option):void {
        Object.assign(appconfig,opt)
        app.component('Win10',Win)
    },
    
}
export default plug

function AddToDesktop(app:appInfo) {
    appList.push(app)
}
function ClearDesktop() {
    appList.splice(0,appList.length)
}


export { DragWindow } from "./packages/window/libs/DragWindow";
export { DWM } from "./packages/window/libs/DWM";
export type { WindowInfo } from "./packages/window/libs/DWM";

export { SystemStatus } from "./packages/window/libs/SystemStatus";
export { MenuCtrl } from "./packages/window/libs/MenuCtrl";


export {
    AddToDesktop,
    ClearDesktop
}