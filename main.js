import { loadModules } from "./loader.js";
import { registry } from "./registry.js";
import { setupCommunication, broadcast } from "./communication.js";


const consoleBox =
document.getElementById("console");


export function log(message){

    consoleBox.innerHTML +=
    "<br>" + message;

    consoleBox.scrollTop =
    consoleBox.scrollHeight;

}


async function start(){

    log("Starting Universal HTML Hub...");


    setupCommunication(log);


    await loadModules(log);


    log(
        "Loaded modules: "
        +
        registry.getAll().length
    );

}


document
.getElementById("reload")
.onclick=()=>location.reload();


document
.getElementById("broadcast")
.onclick=()=>{

    broadcast({
        type:"SYSTEM",
        message:"Hello Modules"
    });

};


start();
