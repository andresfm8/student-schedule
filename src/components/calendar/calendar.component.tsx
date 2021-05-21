import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './calendar.styles';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from 'react';

const dummyData = {
  noOfYears: 3,
  years: 
  [
    {
      id: 1,
      name: "first",
      terms: [
        {
          id: 1,
          name: "First Term",
          courses: 6,
          coop: false
        },
        {
          id: 2,
          name: "Second Term",
          courses: 6,
          coop: false
        },
        {
          id: 3,
          name: "Break",
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
            <Grid 
              key={year.id} 
              container xs={4} lg={12} spacing={1}
              className={classes.yearTermContainer}  
            >
              <Grid
                item 
                xs={4} lg={3}
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
                    September 2019
                      <br/>
                      <span>
                        to
                      </span>
                      <br/>
                    August 2020
                  </p>
                </Paper>
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
                    <h3>{term.name}</h3>
                    <h5>{term.courses ? `${term.courses} courses` : 'No courses at this time, you may take extra courses if you wish to reduce your courseload'}</h5>
                    <button>See more</button> {/*Use a material ui button*/}
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