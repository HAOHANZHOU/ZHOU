const express = require('express');
// add our router
const authorRouter = express.Router();
// require the author controller
const authorController = require('../controllers/authorController.js');


const routeController = require('../controllers/routeController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

authorRouter.get('/:id', (req, res) => routeController.getAuthorByID(req, res));

// export the router
module.exports = authorRouter;





