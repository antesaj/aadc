import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: 10
  }
});

const ReadingPage = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Stuff on this card.</Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Stuff on this card.</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingPage;
