// const fs = require("fs")

// const quote = "one day or day one"
// const quote2 = "live more, worry less"

// fs.writeFile("./awesome.html",quote, (error) => {
//     console.log("Completed writing awesome html")
// })


// for( let i=1; i<=10; i++){
//     fs.writeFile(`./test/text-${i}.html`, quote2, (err) =>{
//         console.log(`Completed writing text-${i}.html`)
//     })
// }

// const [,,n] = process.argv

// for( let i=1; i<= n; i++) {
    
// fs.writeFile(`./test/note-${i}.txt`, quote, (err)=>{
//     console.log(`Completed writing note-${i}.txt`)
// })
// }


const fs = require("fs")
const niceQuote = "\nwhat you believe you become"

// fs.readFile("./nice.txt","UTF-8",(err,data) =>{
//     if(err){
//         console.log("Error acquired",err)
//     }
//     console.log("Read the file:  ",data)
// })

// fs.writeFile("./nice.txt",niceQuote,(err) =>{
   
//     console.log("done writing")
// })

// fs.appendFile("./nice.txt",niceQuote,(err) =>{
   
//     console.log("done writing")
// })

// fs.readdir("./test", (err, files) => {
//     console.log("Getting successfully", files)
// })

// fs.unlink("./toRemove.txt",(err)=>{
//     console.log("Deleted")
// })

fs.readdir("./test",'UTF-8',(err,data) =>[
    console.log("reading ", data)
])

fs.unlink('./test', (err) => {
    console.log("Deleted")
})



