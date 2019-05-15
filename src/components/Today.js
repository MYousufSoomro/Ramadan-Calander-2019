import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme =>({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: 15,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function SimpleCard(props) {
  const { classes, RamazanDay, TodayDate, Sehar,  Iftar} = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {TodayDate}
        </Typography>
        <Typography variant="h3" component="h2">
          Ramazan: {RamazanDay}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" fullWidth="true" className={classes.button}>
        <i class="fas fa-moon fa-3x"></i>&nbsp; Sehar: {Sehar}
      </Button>
      
      <Button variant="contained" color="primary" fullWidth="true" className={classes.button}>
        <i class="fas fa-sun fa-3x"> </i>&nbsp; Iftar: {Iftar}
      </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);