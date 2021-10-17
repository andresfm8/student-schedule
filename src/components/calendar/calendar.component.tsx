import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useStyles from './calendar.styles';

import { useSelector } from "react-redux";

import Terms from '../term/terms.component';
import Year from '../year/year.component';
import { retrieveProgram } from '../../redux/program/selector';

// Todo
// - Reevaluate data structure to sort the terms on the month they are supposed to start depending on month of starting the program.
// - Create helper function in redux to return data based on program and starting month/term

const Calendar = () => {
  const classes = useStyles();

  const selectedProgram = useSelector((state: ProgramState) => retrieveProgram(state));

  return (
    <Container>
      <Grid container>
        {/* Temporary, redux needs more functions. Ideally we don't want to render the program until a term is selected */}
        {selectedProgram.name ?

          selectedProgram.years.map((year) => (
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
          ))

          : <p style={{ color: "white" }}>No program selected</p>
        }
      </Grid>
    </Container>
  )
};

export default Calendar;