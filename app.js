// let express = require('express');
// let app = express();

// app.get('/', (request, response) => response.send('<h1>Home Page</h1>')
// )

// app.get('/contacts', (request, response) => response.send('<h1>Contacts Page</h1>'))

// app.get('*', (request, response) => response.send('<h1>404 Not Found</h1>'))

// app.listen(3000, () => console.log('Listening 3000...'))

// Route Parameters
let express = require('express');
let app = express();

app.get('/shop/:category/:subcategory', (req, resp) => {
    resp.send(`<h4>Category: ${req.params.category}</h4>
    <h4>Subcategory: ${req.params.subcategory}</h4>`);
})

app.listen(3000, () => console.log('Listening 3000...'))
