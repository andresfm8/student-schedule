import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  createStyles({
    gridTerms: {
      display: 'inline-grid',
      textAlign: 'left'
    },
    termDisplay: {
      margin: '0.4vh 0',
      paddingLeft: '1em',
      background: '#16131d !important',
      color: '#fff !important'
    },
    seeMoreButton: {
      height: '1.5em',
      marginLeft: '2em !important'
    }
  }),
);

export default useStyles;