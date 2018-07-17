const util = require("util");
const wait = util.promisify(setTimeout);

module.exports = {
    async process01(){
        console.log("Proceses 01 started");
        console.time("Process 01 ended");

        await wait(5000);
        console.timeEnd("Process 01 ended");
        return 'process01-value';
    },

    async process02(){
        console.log("Proceses 02 started");
        console.time("Process 02 ended");

        await wait(3000);
        console.timeEnd("Process 02 ended");
        return 'process02-value';
    }
}