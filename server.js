var express = require('express')
var app = express()

app.use (express.static('./public'));
app.get('/', (request, response) => {
    response.status(200).redirect('index.html');
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on ${PORT}`));

