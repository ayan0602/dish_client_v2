import { Update_Aplication, Update_MiniComps } from "./Updater.js"

function main(){
    //new Update_Aplication('/update')
    new Update_Aplication('/update-test')
    new Update_MiniComps('/mini-comps')

}

if (document.readyState !== "loading") {
     main(); // Or setTimeout(onReady, 0); if you want it consistently async
} else {
    document.addEventListener("DOMContentLoaded", main);
}

