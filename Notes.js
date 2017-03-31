query parameters
filtered search
ORM


/search

change the results of that query parameters

router.get('/search', controller.search);

// in the controller

controller.search = (req, res) => {
  Roommate
  .findAll(req.query)
  .then((data) => {
    res.json(data);
  });
}

// In model

Roommate.findAll(queryParams) = () => {
  // Loop over all three parameters and insert each one into a SQL OR statement
  // This would be an and statement
  // Multiple SQL request for each option
}


// React //

// switch user to users in index.js
// redux //
