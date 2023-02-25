var express = require('express')
const app = express();

const PORT =5000; 
var time = require('express-timestamp')
app.use(time.init)

app.get('/', function (request, response) {
    response.send(request.timestamp)
  })
  app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));