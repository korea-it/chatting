const http = require('http')

const PORT = 5000

// 서버 생성
http
  .createServer((req, res) => {
    if (req.url === '/api/users') {
      const users = [
        { name: 'junwoo', age: 38 },
        { name: 'bongsik', age: 26 },
        { name: 'chulsoo', age: 15 },
        { name: 'sumin', age: 13 },
        { name: 'taeyeon', age: 22 },
      ]
      res.write(JSON.stringify(users))
    } else if (req.url === '/api/todos') {
      // todo 관련된 내용을 response 해주는 api
    } else {
      res.write('<h1>Hello Node JS</h1>')
    }
    res.end()
  })
  .listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
  })
