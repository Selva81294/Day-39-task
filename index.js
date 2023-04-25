import fs from "fs"

const data = new Date().toString()

//Create a text file
fs.writeFile("current date-time.txt", data , function(err){
    if(err){
        console.log(err)
    }
    console.log("Successfully New File Created")
})

//Read a text file
fs.readFile("current date-time.txt", function(err, data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})