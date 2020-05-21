import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as actions from '../../actions/AppActions';
import * as API from '../../utils/API';
import Login from '../Login/Login';
import News from '../News/News';
import ArticleDetailed from '../Article/ArticleDetailed/ArticleDetailed';
import Loader from '../Loader/Loader';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
  };
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    API.getInitData().then((isLogin) => {
      if (isLogin){
        const { login } = this.props;
        login();
      }
      this.setState({isLoading: false});
    }).catch((error) => {
      throw error;
    });
  }

  render() {
    const {
      isLoading,
    } = this.state;

    if (isLoading) return <Loader />;

    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/article">
            <ArticleDetailed />
          </Route>
          <Route path="/">
            <News />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  actions,
)(App);

App.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
