import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    yearTermContainer :{
      marginBottom: '0.5em'
    },
    gridYear: {
      height: '100%',
      gridGap: theme.spacing(3),
      display: 'flex'      
      // margin: '0.5vh 0.1vw',
    },
    gridTerms: {
      display: 'inline-grid',
      textAlign: 'center'
    },
    yearDisplay: {
      height: '100%',
      width: '100%',
      display: 'flex',
      
    },
    yearContent: {
      margin: '0 auto',
      alignSelf: 'center',
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