//Macro task

const {readFile} = require('fs')

console.log('Started a fisrt task')

readFile('./content/fisrt.txt', 'utf8', (err,result) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')