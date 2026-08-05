import { registry } from "./registry.js";


export async function loadModules(log){

    try{

        const response =
        await fetch("modules.json");


        const data =
        await response.json();


        for(const module of data.modules){

            createModule(module,log);

        }


    }
    catch(error){

        log(
            "Module loading failed: "
            +
            error
        );

    }

}



function createModule(module,log){


    const button =
    document.createElement("button");


    button.textContent =
    module.name;


    const frame =
    document.createElement("iframe");


    frame.src =
    module.path;


    frame.dataset.name =
    module.name;


    document
    .getElementById("modules")
    .appendChild(button);


    document
    .getElementById("workspace")
    .appendChild(frame);



    button.onclick=()=>{

        document
        .querySelectorAll("iframe")
        .forEach(f=>
        f.classList.remove("active")
        );


        frame.classList.add("active");


        log(
            "Opened: "
            +
            module.name
        );

    };



    registry.register(
        module.name,
        {
            path:module.path,
            frame
        }
    );


}
