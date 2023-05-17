const http = require('http')
const url = require('url')
http.createServer((request, response) => {
     // console.log('server work')
     // console.log(request.method)
     console.log(request)
     switch(request.method){
          case 'GET':
               let urlRequest = url.parse(request.url, true)
               if(urlRequest.query.name == 'антон'){
                    response.end('This Antonio page')
               } else {
                    response.end('This page is only for Antonio')
               }
               break
          case 'POST':
               let body = ''
               request.on('data', chuck => {
                    body += chuck.toString()
               })
               request.on('end', ()=>{
                    console.log(body)
                    response.end('ok')
               })
          default:
               response.end('Method not found')

     }
     
     
     
}).listen(3000)
// Lesson 3 
// -------------
// Lesson 2 End
// const fs = require('fs')
// let posts = [
//      {
//        "userId": 1,
//        "id": 1,
//        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//      },
//      {
//        "userId": 1,
//        "id": 2,
//        "title": "qui est esse",
//        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//      },
//      {
//        "userId": 1,
//        "id": 3,
//        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//      }
// ]

// fs.writeFileSync('posts/posts.json', JSON.stringify(posts))

// Lesson 2
// --------------------------
// Lesson 1 End
// console.log(process)
// const fs = require('fs')
// const path = require('path')
// function textTest(){
//       fs.readFile('text.txt', 'utf-8', (error,data)=>{
//           console.log(data)
//      })
     
// }

// function textTestSync(){
//      let text = fs.readFileSync('text.txt', 'utf-8')
//      console.log(text)
// }

// function readDirection(){
//      fs.readdir('textStorage',(error, data)=> {
//           data.forEach(e=> {
//                console.log(path.extname(e))
//                // text = fs.readFileSync(`./textStorage/${e}`, 'utf-8')
//                // console.log(text)
//           })
//      })
// }

// function readDirectionSync(){
//      let direction = fs.readdirSync('textStorage')
//      console.log(direction)
//      direction.forEach(e=>{
//           console.log(`Имя файла ${e}. Его размер ${fs.statSync(`textStorage/${e}`).size}. А его расширение ${path.extname(e)}`)
//      })
     
// }

// fs.writeFile('./textStorage/newFile.txt', 'Заметочка', (error,data)=>{})

// readDirectionSync()

// Lesson 1 
// --------------------------

// Test End
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

// Test 
