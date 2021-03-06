import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';
import { Typography, RadioGroup, Radio, Paper, FormControlLabel, FormLabel, Grid, withStyles} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '200px',
    width: '20vw',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: 16,
  };

  handleChange = key => (event, value) => {
    console.log(event.target.value)
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={40}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            {[0, 1, 2, 3, 4, 5, 6].map(value => (
              <Grid key={value} item >
                <Paper className={classes.paper} elevation={1} >
                <Typography variant='h5' component='h5' >
                {`This is Paper number ${value}`}

                </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
