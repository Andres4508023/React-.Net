

import {ThemeProvider as createMuiTheme } from '@material-ui/core/styles';
/* import createMuiTheme from "@material-ui/core/styles"; */

const theme = createMuiTheme({

    palette :{
        primary : {
        light : "#63a4fff",
        main : "#1976d2",
        dark : "#004ba0",
        contrasText : "#ecfad8"
      }
    },
});

export default theme;