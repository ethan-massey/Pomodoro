const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
const port = 9000;

app.listen(port, () => console.log("Example app listening on port ${port}!"));

app.get("/", function(req, res) {
  axios
    // key : 27vXDG4l7uX41oxa4yytO861D3KL6Vrp

    .get(
      "http://api.giphy.com/v1/gifs/search?q=congrats&api_key=27vXDG4l7uX41oxa4yytO861D3KL6Vrp&limit=50"
    )
    .then(response => res.send(response.data.data));
});
