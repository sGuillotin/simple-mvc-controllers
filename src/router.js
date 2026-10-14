const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.index); // declare a GET route
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);

    app.get('/getName', controllers.getName);


    app.get('/*wild', controllers.notFound); // uses * wildcard - anything not above, so /anything


    // put a POST request here - won't trigger the wildcard for GET
    app.post('/setName', controllers.setName);
};

module.exports = router;
