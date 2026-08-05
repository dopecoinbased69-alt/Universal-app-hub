let logger;


export function setupCommunication(log){

    logger=log;


    window.addEventListener(
        "message",
        event=>{


            logger(
                "Message: "
                +
                JSON.stringify(event.data)
            );


            if(event.data.target){

                send(
                    event.data.target,
                    event.data
                );

            }


        });


}



export function send(target,data){

    const frame =
    document.querySelector(
        `iframe[data-name="${target}"]`
    );


    if(frame){

        frame.contentWindow.postMessage(
            data,
            "*"
        );

    }

}



export function broadcast(data){

    document
    .querySelectorAll("iframe")
    .forEach(frame=>{

        frame.contentWindow.postMessage(
            data,
            "*"
        );

    });

}

