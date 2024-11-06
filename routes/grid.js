// grid.js
app.get('/grid', (req, res) => {
    let query = req.query;
    console.log(`rows ${query.rows}`);
    console.log(`cols ${query.cols}`);
    res.render('grid', { title: "Grid Display", query: query });
  });
  