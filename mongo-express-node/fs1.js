const fs = require("fs")
const quote = "Live Long, Live Happy"

fs.writeFile("./cool.js", quote,(err) => {
    console.log("completed writing cool.js")
})


for( let i=1; i<=10; i++){
    fs.writeFile(`./test/text-$ {i}.html`, quote, (err) => {
        console.log(`Completed writing text-${i}.html`);
    })
}