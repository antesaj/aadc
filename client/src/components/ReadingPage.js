import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReadingCard from "./ReadingCard";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: 40
  },
  readingPage: {
    display: "flex",
    flexDirection: "row"
  }
});

const renderCards = bookshelf => {
  const cards =
    bookshelf &&
    bookshelf.map(book => (
      <ReadingCard
        media={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        subtitle={book.volumeInfo.subtitle}
      />
    ));

  return cards;
};

const ReadingPage = props => {
  const classes = useStyles();
  const [bookshelf, setBookshelf] = useState(null);

  useEffect(() => {
    axios
      .get("/api/reading")
      .then(res => {
        setBookshelf(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div className={classes.readingPage}>{renderCards(bookshelf)}</div>;
};

export default ReadingPage;
