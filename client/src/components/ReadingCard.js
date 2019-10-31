import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: 10
  }
});

const ReadingCard = props => {
  const classes = useStyles();
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    axios
      .get("/api/reading")
      .then(res => {
        console.log(res);
        setBookInfo(res.data.length);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">I'm reading {bookInfo} books!</Typography>
      </CardContent>
    </Card>
  );
};

export default ReadingCard;
