import { createMuiTheme } from '@material-ui/core/styles';

const acrBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createMuiTheme({
    palette: {
        common: {
            black: `${acrBlue}`,
            white: `${arcOrange}`,
        },
        primary: {
            main: `${acrBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    }
});