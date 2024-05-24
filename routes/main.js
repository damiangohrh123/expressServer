module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index.html", {
      title: "Dynamic title",
      heading: "Dynamic header"
    });
  });

  // Define a new route for /search
  app.get("/search", (req, res) => {
    res.render('search.html', {
      title: "Search Page"
    });
  });
  
  // Define a new route for /search-result
  app.get("/search-result", function (req, res) {
    // Searching in the database
    res.send("This is the keyword you entered: " + req.query.keyword + "<br>" + 
      "This is the result of the search:"); 
  });

  // Define a new route for /register
  app.get("/register", (req, res) => {
    res.render('register.html');
  });

  // Define a new route for /registered
  app.post("/registered", (req, res) => {
    res.send(req.body);
  });
}