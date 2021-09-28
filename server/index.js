const express = require('express')
const app = express()
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

let onLineUsers = []
let onLineCount = 0

const userFilter = userInfo => {
  if (onLineUsers.length <= 0) return false
  return onLineUsers.some(item => item.userId === userInfo.userId)
}

const getCurrentLongOut = (userId) => {
  if (!userId) return
  let obj = ''
  onLineUsers.forEach((item, index) => {
    if (item.userId === userId) {
      obj = {
        userInfo: item,
        loginOutIndex: index
      }
    }
  })
  return obj
}

io.on('connection', client => {
  console.log('\033[42;30m用户加入 \033[0m')

  client.on('Login', data => {
    const { username, userId } = data
    client.name = userId
    if (!userFilter(data)) {
      onLineUsers.push({ ...data })
      onLineCount++
    }

    io.emit('Login', {
      userInfo: data,
      onLineCount,
      onLineUsers
    })

    console.log('\033[36m 用户 ' + username + '加入了群聊 \033[0m')
  })

  client.on('Message', data => {
    console.log('\033[36m 用户 ' + data.userInfo.username + '说：'+ data.message +' \033[0m')
    //向客户端广播
    io.emit('Message', data)
  });

  client.on('disconnect', () => {
    console.log('\033[42;31m 用户退出 \033[0m')
    const currentLoginOutUser = getCurrentLongOut(client.name)

    if(currentLoginOutUser){
      const { userInfo,loginOutIndex } = currentLoginOutUser
      onLineUsers.splice(loginOutIndex,1)
      onLineCount--
      io.emit('LoginOut', {
        onLineCount,
        userInfo,
        onLineUsers
      })
      console.log('\033[31m 用户 ' + userInfo.username + '退出了群聊 \033[0m')
    }
  });
});
server.listen(5000, () => {
  console.log('http://localhost:5000')
});

