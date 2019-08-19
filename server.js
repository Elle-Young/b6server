var express = require('express')
var app = express()

app.use (express.static('./public'));

const PORT = 3000
app.listen(PORT, () => console.log(`listening on ${PORT}`));

