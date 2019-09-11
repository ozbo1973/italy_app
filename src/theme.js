import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#072170"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    },
    headerPrimary: {
      main: "#87f2eb"
    },
    textPrimary: {
      main: "#636161"
    },
    linkPrimary: {
      main: "#fff",
      active: "#f2c476"
    },
    backgroundPrimary: {
      main: "#ccc"
    }
  }
});

export default theme;
