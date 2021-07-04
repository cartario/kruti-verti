import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();
const fontSize = 20; // px
const htmlFontSize = 16; // 16px is the default font-size used by browsers.
const coef = fontSize / fontSize;

const fontWeights = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const typography = {
  fontFamily: 'IBM Plex Sans, Arial',
  fontSize: 20,
  // значения здесь https://fonts.google.com/specimen/IBM+Plex+Sans
  ...fontWeights,
  pxToRem: (size: any) => `${(size / htmlFontSize) * coef}rem`,

  body1: {
    fontSize: 20,
    color: '#08103D',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 17,      
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
  },
  body2: {
    fontSize: 17,
    color: '#6B708B',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 15,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
    },
  },
  // Link
  overline: {
    fontSize: 17,
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
  },
  // Sub
  caption: {
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#6B708B',
  },

  button: {
    fontSize: 20,
    letterSpacing: 1.2,
    fontWeight: 'bold',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 17,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
      letterSpacing: 1.45,
    },
  },

  // Titles
  h1: {
    fontFamily: 'Nunito, Arial',
    fontSize: 51,
    fontWeight: 600,
    color: '#262626',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 23,
    },
  },
  h2: {
    fontFamily: 'Nunito, Arial, sans-serif',
    fontSize: 40,
    fontWeight: 600,
    color: '#262626',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 34,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 23,
    },
  },
  h3: {
    fontSize: 23,
    fontWeight: 600,
    color: '#262626',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 17,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
  },
  h4: {
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#262626',
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 17,
      textTransform: 'none',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 15,
    },
  },
  h5: {},
  h6: {},

  subtitle1: {},
  subtitle2: {},
};

export default typography;
