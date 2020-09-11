// Function to handle a request to a particular author

const getAuthorByID2 = (req, res) => {
    res.send("require author");
};
const getAuthorByID = (req, res) => {
    // search for author in the database via ID
    var id = req.params.id;

    const authors = require('../models/author');
    const author = authors.find(author => author.id === req.params.id);
    
   /*
    for (i = 0; i < authors.length; i++){
        if (authors[i].id == id){
            res.send(authors[i]);
        }
    }

    res.send("We don't have this author");
    */
 
    if (author){
    res.send(author); // send back the author details
    }
    else{
    // you can decide what to return if author is not found
    // currently, an empty list will be return.
    res.send("We don't have this author");
    }



    };
    module.exports = {
        getAuthorByID,
        getAuthorByID2,
    };

    