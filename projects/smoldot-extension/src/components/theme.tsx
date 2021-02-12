import { ThemeOptions } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

export const substrateGreen = {
  100: '#7E8D96',
  200: '#5CFFC8',
  300: '#18FFB2',
  400: '#16DB9A',
  500: '#11B37C',
  600: '#1A9A6C',
};

const palette = {
	type: 'light',
	common: {
		black: 'black',
		white: 'white',
	},
	background: {
		paper: 'white',
		default: 'white',
	},
	primary: {
		light: substrateGreen[100],
		main: substrateGreen[400],
		dark: substrateGreen[500],
		contrastText: 'black',
	},
	secondary: {
		light: substrateGreen[100],
		main: substrateGreen[400],
		dark: substrateGreen[500],
		contrastText: 'black',
	},
	error: {
		light: red[100],
		main: red[400],
		dark: red[500],
		contrastText: 'black',
	},
	text: {
		primary: grey[900],
		secondary: grey[400],
		disabled: grey[300],
		hint: grey[700],
	},
	action: {
		active: substrateGreen[300],
	},
	divider: 'black',
}

const light: ThemeOptions = {
	typography: {
		allVariants: {
      color: palette.text.primary,
    },
		fontFamily: '\Inter\, \-apple-system\, \BlinkMacSystemFont\, \Segoe UI\, \Helvetica\, \Arial\, \Segoe UI\, \Arial\, sans-serif, \"Apple Color Emoji"\, \"Segoe UI Emoji",\"Web3-Regular"',
		h1: {
			fontWeight: 500,
			fontSize: 30,
			lineHeight: '120%',
		},
		h2: {
			fontWeight: 400,
			fontSize: 22,
			lineHeight: '120%',
			letterSpacing: 0.25,
		},
		h3: {
			fontWeight: 600,
			fontSize: 18,
			lineHeight: '120%',
		},
		h4: {
			fontWeight: 500,
			fontSize: 15,
			lineHeight: '120%',
		},
		body1: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: '135%',
			letterSpacing: 0.15,
		},
		body2: {
			fontWeight: 400,
			fontSize: 12,
			lineHeight: '135%',
			letterSpacing: 0.25,
		},
		button: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: '120%',
			letterSpacing: 0.2,
			textTransform: 'none',
		},
		subtitle1: {
			fontFamily: '\SFMono-Regular\, \Consolas\ , \Liberation Mono\, \Menlo\, monospace',
			fontWeight: 400,
			fontSize: 20,
			lineHeight: '120%',
		},
		subtitle2: {
			fontFamily: '\SFMono-Regular\, \Consolas\ , \Liberation Mono\, \Menlo\, monospace',
			fontWeight: 400,
			fontSize: 13,
			lineHeight: '135%',
			letterSpacing: 0.1,
		},
		overline: {
			fontSize: 11,
			lineHeight: '120%',
			letterSpacing: 0.7,
		},
	},
	palette: palette
};

export default light;
