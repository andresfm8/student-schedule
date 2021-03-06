import { createStyles, makeStyles } from "@mui/styles";

import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles(
  createStyles({
    gridYear: {
      height: '100%',
      fap: 5,
      display: 'flex'
      // margin: '0.5vh 0.1vw',
    },
    yearDisplay: {
      height: '100%',
      width: '100%',
      display: 'flex',
      background: '#16131d !important',
      color: '#fff !important'
    },
    yearContent: {
      margin: '0 auto',
      alignSelf: 'center',
      textAlign: 'center',
      width: '200px',
      [theme.breakpoints.down('md')]: {
        transform: 'rotate(-90deg)',
        /* Safari */
        webkitTransform: 'rotate(-90deg)',
        /* Firefox */
        mozTransform: 'rotate(-90deg)',
        /* IE */
        msTransform: 'rotate(-90deg)',
        /* Opera */
        oTransform: 'rotate(-90deg)',
        /* Internet Explorer */
        filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)'
      }
    },

  }),
);

export default useStyles;