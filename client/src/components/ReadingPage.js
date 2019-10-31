import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReadingCard from "./ReadingCard";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: 10
  }
});

const renderCards = () => {
  const ids = [1, 2, 3, 4, 5];
  const cards = ids.map(id => <ReadingCard key={id} />);

  return cards;
};

const ReadingPage = props => {
  const classes = useStyles();

  return <div>{renderCards()}</div>;
};

export default ReadingPage;
