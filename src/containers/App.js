import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import Loader from "../components/Loader/Loader";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";

class App extends React.Component {
  // App contains routes and also wrapped with snackbar and intl for localization

  render() {
    const { lang, loading } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {loading ? <Loader /> : null}
          <Router history={history}>
            <MaterialSnackbar />
            {<Routes lang={lang} />}
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang, loading, login, needy }) => ({
  lang,
  loading,
  login,
  needy
});

export default connect(mapStateToProps, { setCurrentLang })(App);
