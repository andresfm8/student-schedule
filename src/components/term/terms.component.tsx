import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from './terms.styles';

//Move to TYPES file
export type Term = {
    id: number;
    name: string;
    time: string;
    courses: number;
    coop: boolean;
}

type TermProps = {
  terms: Term[];
}

const Terms = ({terms}: TermProps ) => {
  const classes = useStyles();

  return (
    <Grid 
      item 
      xs={9}
      className={classes.gridTerms}
      // spacing={5}
    >
      <Container>
        {terms.map(term => (
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
            <h5>
              {term.courses 
              ? `${term.courses} courses` 
              : 'No courses at this time, you may take extra courses if you wish to reduce your courseload'}
            </h5>  
          </Paper>
        ))}
      </Container>
    </Grid>
  )
};  

export default Terms;