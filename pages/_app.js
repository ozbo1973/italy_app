import App from "next/app";
import Nav from "../src/components/nav/nav";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Container } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import theme from "../src/theme";
import { LinksAndDocsProvider } from "../src/contexts/linksanddocs.context";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <LinksAndDocsProvider>
            <CssBaseline />
            <Nav />
            <Component {...pageProps} />
          </LinksAndDocsProvider>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
