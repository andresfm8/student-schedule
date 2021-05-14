import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridYear: {
      height: '30vh',
      gridGap: theme.spacing(3),
      margin: '0.5vh 0.1vw',
    },
    gridTerms: {
      display: 'inline-grid',
      textAlign: 'center'
    },
    yearDisplay: {
      height: '100%',
      textAlign: 'center'
    },
    paper: {
      // height: '125px',
      // width: 100,
      margin: '0.3vh 0',
    },
  }),
);

export default useStyles;