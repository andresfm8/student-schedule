import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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