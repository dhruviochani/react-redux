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
    const {loading } = this.props;
    return (
        <div>
          {loading ? <Loader /> : null}
          <Router history={history}>
            <MaterialSnackbar />
            {<Routes/>}
          </Router>
        </div>
    );
  }
}

const mapStateToProps = ({ loading, login, needy, dashboard }) => ({
  loading,
  login,
  needy,
  dashboard
});

export default connect(mapStateToProps, { setCurrentLang })(App);
