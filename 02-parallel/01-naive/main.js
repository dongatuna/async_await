const { process01, process02 } = require("./processes");

async function main(){
    try{
        console.time('TRT');
        const data = await Promise.all([process01(), process02()]);

        console.log();

        console.log("Proces 01 Returned: ", data[0]);
        console.log("Proces 02 Returned: ", data[1]);

        console.log();

        console.timeEnd('TRT');
    }catch(error){
        console.error(error);
    }
}

main();