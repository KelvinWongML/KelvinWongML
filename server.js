const express = require('express')
const SocketServer = require('ws').Server
const mysql = require('mysql')
const dotenv = require('dotenv').config()

/*checkDB(data, ws) is for login and sign up processes*/
checkDB = (data, ws) => {
  var con = mysql.createConnection({
    host: dotenv.parsed.DB_HOST,
    user: dotenv.parsed.DB_USER,
    password: dotenv.parsed.DB_PASSWORD,
    database: dotenv.parsed.DB_DATABASE
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database.");
    switch (data[2]) {
      case '0':
        con.query(`SELECT EXISTS(SELECT * FROM user WHERE username = ? AND password = ?)`, [data[0], data[1]], function (err, result) {
          con.end();
          if (Object.values(result[0])[0] == 1) {
            console.log('Client login.')
            ws.send('login successfully.')
          } else { ws.send('login unsuccessfully.') }
          return;
        });
        break;

      case '1':
        con.query(`SELECT EXISTS(SELECT * FROM user WHERE username = ? )`, data[0], function (err, result) {
          if (Object.values(result[0])[0] == 0) {
            con.query(`INSERT INTO user VALUES(?, ?)`, [data[0], data[1]], (err, result) => {
              con.end();
              console.log('Client sign in.')
              ws.send('Sign in successfully.')
            })
          } else {
            con.end();
            ws.send('Username is taken.')
          }
          return;
        });
        break;
    };
  });
}

/*Parts below are about communicating with cilent side*/
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
