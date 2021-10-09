import {createTheme} from '@mui/material';
import palette from './palette/Palette';
import typography from './typography/Typography';

const theme = createTheme({
    palette: palette,
    typography: typography,
});

export default theme;
