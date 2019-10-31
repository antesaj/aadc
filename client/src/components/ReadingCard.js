import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    minWidth: 275,
    margin: 10
  },
  media: {
    height: 400
  }
});

const ReadingCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        title={props.title}
        image={props.media}
      />
      <CardContent>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="subtitle1">{props.subtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReadingCard;
