import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './calendar.styles';
import Paper from '@material-ui/core/Paper';

const dummyData = {
  years: 
  [
    {
      id: 1,
      name: "first",
      terms: [
        {
          id: 1,
          name: "first",
          courses: 6,
          coop: false
        },
        {
          id: 2,
          name: "second",
          courses: 6,
          coop: false
        },
        {
          id: 3,
          name: "break",
          courses: 0,
          coop: false
        },
      ]
    },
    {
      id: 2,
      name: "second",
      terms: [
        {
          id: 1,
          name: "third",
          courses: 6,
          coop: false
        },
        {
          id: 2,
          name: "co-op",
          courses: 0,
          coop: true
        },
        {
          id: 3,
          name: "fourth",
          courses: 6,
          coop: false
        },
      ]
    }
  ]
}

const Calendar = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        {dummyData.years.map((year) => (
            <Grid key={year.id} container xs={4} lg={12} spacing={1}>
              <Grid
                item 
                xs={4} lg={3}
                className={classes.gridYear}  
              >
                <Paper variant="outlined" className={classes.yearDisplay}>{year.name}</Paper>
              </Grid>
              <Grid 
                item 
                xs={4} lg={8}
                className={classes.gridTerms}
                spacing={5}
              >
                {year.terms.map(term => (
                  <Paper 
                    square 
                    variant="outlined" 
                    className={classes.paper}
                  >
                    {term.name}
                  </Paper>
                ))
                }
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
};

export default Calendar;