let ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => {
  console.log('open connection')
}

send = (username, password, type) => {
  const message = [username, password, type]
  ws.send(message)
}

ws.onclose = () => {
  console.log('close connection')
}

ws.onmessage = event => {
  document.getElementById('result').innerHTML = `${event.data.toString('utf8')}`
}
