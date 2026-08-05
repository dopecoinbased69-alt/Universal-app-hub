const modules = new Map();


export const registry={


    register(name,data){

        modules.set(
            name,
            data
        );

    },


    get(name){

        return modules.get(name);

    },


    getAll(){

        return Array.from(
            modules.entries()
        );

    }


};
