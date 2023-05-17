// const array = [{
//      name: 'Sergey',
//      surname: 'Sherbakov',
//      age: 22,
//      programmer: true,
// },
// {
//      name: 'Vasya',
//      surname: 'Pupkin',
//      age: 98,
//      programmer: false,
// },
// ]

// array[1].name = 'Goga'

// console.log(array[1])

// Test end


// Lesson 1
// console.log(process)
const fs = require('fs')
const path = require('path')
function textTest(){
      fs.readFile('text.txt', 'utf-8', (error,data)=>{
          console.log(data)
     })
     
}

function textTestSync(){
     let text = fs.readFileSync('text.txt', 'utf-8')
     console.log(text)
}

function readDirection(){
     fs.readdir('textStorage',(error, data)=> {
          data.forEach(e=> {
               console.log(path.extname(e))
               // text = fs.readFileSync(`./textStorage/${e}`, 'utf-8')
               // console.log(text)
          })
     })
}

function readDirectionSync(){
     let direction = fs.readdirSync('textStorage')
     console.log(direction)
     direction.forEach(e=>{
          console.log(`Имя файла ${e}. Его размер ${fs.statSync(`textStorage/${e}`).size}. А его расширение ${path.extname(e)}`)
     })
     
}

fs.writeFile('./textStorage/newFile.txt', 'Заметочка', (error,data)=>{})

readDirectionSync()

// Lesson 1 End
// Lesson 2
