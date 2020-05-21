import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/AppActions';
import { withRouter } from "react-router-dom";
import classes from './Login.module.scss';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
  };
}

const checkAuth = (username, pass) => {
  return username === 'admin' && pass === '12345';
};

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      authError: false,
    };
  }

  onChangeLogin(value) {
    this.setState({
      login: value,
    });
  }

  onChangePass(value) {
    this.setState({
      password: value,
    });
  }

  onLoginClick() {
    const {login, password} = this.state;
    if (checkAuth(login, password)){
      this.login();
    }
    else{
      this.authError();
    }
  }

  onLogoutClick() {
    const { logout } = this.props;
    localStorage.removeItem('login');
    logout();
  }

  login(token) {
    const { login, history } = this.props;
    localStorage.setItem('login', 'true');
    login();
    history.push('/');
  }

  authError() {
    this.setState({
      login: '',
      password: '',
      authError: true,
    });

    setTimeout(
      () => {
        this.setState({
          authError: false,
        });
      }, 1500,
    );
  }

  render() {
    const { isLogin } = this.props;
    const { authError, login, password } = this.state;

    return (
      <div className={classes.LoginWindow} >
          <div>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="login"
                  placeholder="login (admin)"
                  value={login}
                  onChange={(e) => this.onChangeLogin(e.target.value)}
                />
                <input
                  type="password"
                  name="pass"
                  placeholder="password (12345)"
                  value={password}
                  onChange={(e) => this.onChangePass(e.target.value)}
                />
              </>
            )}
            <button
              type="button"
              onClick={() => !isLogin ? this.onLoginClick() : this.onLogoutClick()}
            >
              {isLogin ? 'Logout' : 'Login'}
            </button>
          </div>
          {authError && <div className={classes.Error}>ошибка авторизации &nbsp;</div>}
      </div>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(Login));

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
