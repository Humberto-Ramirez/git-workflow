import {TypographyOptions} from '@mui/material/styles/createTypography';
import {Palette} from '@mui/material';

const typography: (palette: Palette) => TypographyOptions = (
    palette: Palette
) => {
    return {
        htmlFontSize: 16,
        fontFamily: [
            'Benton Sans',
            '"Roboto"',
            '"Helvetica"',
            '"Arial"',
            'sans-serif',
        ].join(','),
        fontWeightLight: 100,
        fontWeightRegular: 300,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 'lighter',
            fontSize: 64,
            lineHeight: '72px',
            letterSpacing: '0.25px',
        },
        h2: {
            fontWeight: 'lighter',
            fontSize: 48,
            lineHeight: '56px',
            letterSpacing: '0.25px',
        },
        h3: {
            fontWeight: 'normal',
            fontSize: 32,
            lineHeight: '40px',
        },
        h4: {
            fontWeight: 'normal',
            fontSize: 24,
            lineHeight: '32px',
            letterSpacing: '0.15px',
        },
        // body
        body1: {
            fontWeight: 'lighter',
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.1px',
        },
        // body small
        body2: {
            fontWeight: 'lighter',
            fontSize: 14,
            lineHeight: '16px',
            letterSpacing: '0.5px',
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.25px',
            color: palette.error.main,
        },
        subtitle2: {
            fontSize: 14,
            textTransform: 'capitalize',
        },
        button: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.1px',
        },
        caption: {
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0.25px',
        },
    };
};

export default typography;
