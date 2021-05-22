import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './calendar.styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//Set year property empty and when selected a year then loop through each year and set it to the value
//Same with starting term
const dummyData = {
  noOfYears: 3,
  years: 
  [
    {
      id: 1,
      name: "First",
      time: "2019-2020",
      terms: [
        {
          id: 1,
          name: "First Term",
          time: "September to December",
          courses: 6,
          coop: false
        },
        {
          id: 2,
          name: "Second Term",
          time: "January to April",
          courses: 6,
          coop: false
        },
        {
          id: 3,
          name: "Break",
          time: "May to August",
          courses: 0,
          coop: false
        },
      ]
    },
    {
      id: 2,
      name: "Second",
      time: "2020-2021",
      terms: [
        {
          id: 1,
          name: "third",
          time: "September to December",
          courses: 6,
          coop: false
        },
        {
          id: 2,
          name: "co-op",
          time: "January to April",
          courses: 0,
          coop: true
        },
        {
          id: 3,
          name: "fourth",
          time: "May to August",
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
            <Grid 
              key={year.id} 
              container  spacing={1}
              className={classes.yearTermContainer}  
            >
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
                    {year.name} year
                      <br/>
                    {year.time}
                  </p>
                </Paper>
              </Grid>
              <Grid 
                item 
                xs={9}
                className={classes.gridTerms}
                // spacing={5}
              >
                {year.terms.map(term => (
                  <Paper 
                    key={term.id}
                    square 
                    variant="outlined" 
                    className={classes.termDisplay}
                  >
                    <h3>{term.name} 
                      <Button 
                        variant="contained" color="primary" size="small"
                        className={classes.seeMoreButton}
                      >
                          See more
                      </Button>
                    </h3>
                    <h5>{term.time ? term.time : ''}</h5>
                    <h5>{term.courses ? `${term.courses} courses` : 'No courses at this time, you may take extra courses if you wish to reduce your courseload'}</h5>
                     
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