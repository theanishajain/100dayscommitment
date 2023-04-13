//make a new folder and then create a new text file inside of it with content 
//new file has been made 
let fs = require('fs')
if(!fs.existsSync('trialFolder'))
fs.mkdirSync('trialFolder')

let path = require('path')
let fileForContent = path.join(__dirname,"trialFolder", "fileForContent.txt")
fs.writeFileSync(fileForContent, "new file has been made")

