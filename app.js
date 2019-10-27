let express = require('express');
let app = express();

app.get('/', function(request, response) {
    response.send('<h1>Home Page</h1>');
})

app.get('/contacts', function(request, response) {
    response.send('<h1>Contacts Page</h1>');
})

app.get('*', function(request, response) {
    response.send('<h1>404 Not Found</h1>');
})

app.listen(3000, function() {
    console.log('Listening 3000...');
})