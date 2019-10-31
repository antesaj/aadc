const axios = require("axios");

exports.handleTest = (req, res) => {
  res.send({ test: "success" });
};

exports.getReading = (req, res) => {
  const userId = "112378641014880612424";

  axios
    .get(
      `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/3/volumes`
    )
    .then(data => {
      const booksOnShelf = data.data.items;
      console.log(
        `Found ${booksOnShelf.length} books on the 'Currently Reading' shelf!`
      );
      res.json(booksOnShelf);
    })
    .catch(err => {
      console.log(err);
    });
};
