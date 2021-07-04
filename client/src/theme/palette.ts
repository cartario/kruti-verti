const SHADOW_PARAMS = '0px 32px 24px -16px';

const palette = { 
  background: {
    default: '#F9F9F9',
    paper: '#FDFDFD',
  },
  text: {
    primary: '#08103d',
    secondary: '#6b708b',
    disabled: '#B8B8B8',
    hint: '#A4A7B7',
  },
  // Buttons
  action: {
    active: '#5B3BD9',
    hover: '#6C4AF1',
    selected: '#4B32B0',
    disabled: '#6B708B',
    disabledBackground: '#F4F4F4',
    focus: '#6C4AF1',
    hoverOpacity: 1,
    selectedOpacity: 1,
    disabledOpacity: 1,
    focusOpacity: 1,
    activatedOpacity: 1,
  },
  default: {
    main: '#FFFFFF',
    dark: '#eeeeee',
    contrastText: '#08103D',
    shadow: `${SHADOW_PARAMS} #F0F1F3`,
    light: '#FFFFFF',
  },
  primary: {
    main: '#7E28DF',
    light: '#A970F5',
    dark: '#6114C8',
    contrastText: '#fff',
    shadow: `${SHADOW_PARAMS} #DBD6EF`,
  },
  secondary: {
    main: '#F44CA8',
    light: '#FF81D8',
    dark: '#CE5C39',
    contrastText: '#fff',
    shadow: `${SHADOW_PARAMS} #F5DED7`,
  },
  success: {
    main: '#4AC461',
    light: '#61D577',
    dark: '#33BA4D',
    contrastText: '#fff',
    shadow: `${SHADOW_PARAMS} #EDF9EF`,
  },
  error: {
    main: '#DB4545',
    light: '#E96262',
    dark: '#CD2C2C',
    contrastText: '#fff',
  },
  info: {
    main: '#6B708B',
    dark: '#08103D',
    light: '#999ebb',
    contrastText: '#ffffff',
  },
  warning: {
    light: 'gradient(180deg, #FFEEAF 0%, #FFF7D7 100%)',
    main: '#F46A3E',
    dark: '#bb3912',
    contrastText: '#000000',
  },
  grey: {
    50: '#F9F9F9',
    100: '#F3F3F3',
    200: '#eaeaea',
    300: '#dadada',
    400: '#b7b7b7',
    500: '#979797',
    600: '#6e6e6e',
    700: '#5b5b5b',
    800: '#3c3c3c',
    900: '#1c1c1c',
    A100: '#dadada',
    A200: '#979797',
    A400: '#5b5b5b',
    A700: '#1c1c1c',
  },
  divider: '#E5E5E5',
};

export default palette;

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteColor {
    shadow?: string
  }
  interface Palette {
    default: Palette['primary'];
  }
  interface PaletteOptions {
    default: PaletteOptions['primary'];
  }
}
