import { Grid, Paper } from '@mui/material';

import useStyles from './year.styles';

type YearProps = {
  name: string;
  time: string;
}

const Year = ({ name, time }: YearProps) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={3}
      className={classes.gridYear}
    >
      <Paper
        square
        variant="outlined"
        className={classes.yearDisplay}
      >
        <p className={classes.yearContent}>
          {name} year
          <br />
          {time}
        </p>
      </Paper>
    </Grid>
  )
};

export default Year;