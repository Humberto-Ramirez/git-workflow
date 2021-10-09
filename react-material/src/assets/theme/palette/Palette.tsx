import {PaletteOptions} from '@mui/material/styles/createPalette';
import * as colors from './colors';

const palette: PaletteOptions = {
    primary: {
        main: colors.primary.A40,
    },
    secondary: {
        main: colors.primary.A20,
    },
    text: {
        primary: colors.secondary.A01,
        secondary: colors.secondary.A02,
        disabled: colors.neutrals.A50,
    },
    background: {
        default: colors.neutrals.A20,
        paper: colors.neutrals.A10,
    },
    error:{
        main: colors.accent.A01
    }
};

export default palette;
