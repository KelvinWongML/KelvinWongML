const express = require('express')
const SocketServer = require('ws').Server
const mysql = require('mysql')



checkDB = (data, ws) => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kelvin(^^$",
    database: "userinfo"
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database.");
    switch (data[2]) {
      case '0':
        con.query(`SELECT EXISTS(SELECT * FROM user WHERE username = ? AND password = ?)`, [data[0], data[1]], function (err, result) {
          con.end();
          console.log(Object.values(result[0])[0])
          if (Object.values(result[0])[0] == 1) {
            ws.send('login successfully.')
          } else {
            ws.send('login unsuccessfully.')
          }
          return;
        });
        break;

      case '1':
        con.query(`SELECT EXISTS(SELECT * FROM user WHERE username = ? )`, data[0], function (err, result) {
          con.end();
          if (Object.values(result[0])[0] == 0) {
            ws.send('Sign in successfully.')
          } else {
            ws.send('Username is taken.')
          }
          return;
        });
        break;

      default:
        break;
    };
  });
}


const PORT = 3000

const server = express()
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const wss = new SocketServer({ server })

wss.on('connection', ws => {

  console.log('Client connected')

  ws.on('message', data => {
    let message = data.toString('utf8').split(',')
    checkDB(message, ws)
  })

  ws.on('close', () => {
    console.log('Close connected')
  })
})