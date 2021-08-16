import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './calendar.styles';

import Terms from '../term/terms.component';

import { Term } from '../term/terms.component';
import Year from '../year/year.component';

// TODO:
//  - Set year property empty and when selected a year then loop through each year and set it to the value
//  - Same with starting term
//  - Create Context (weight pro's/con's of using redux) provider for program data so it can be reused
//  - Create a firebase instance to store course information OR move data temporarily to its own file

//Move to TYPES files
type DummyData = {
  noOfYears: number;
  years: {
    id: number;
    name: string;
    time: string;
    terms: Term[];
  }[]
}

const dummyData: DummyData = {
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
            container spacing={1}
            className={classes.yearTermContainer}
          >
            <Year
              name={year.name}
              time={year.time}
            />
            <Terms terms={year.terms} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};

export default Calendar;