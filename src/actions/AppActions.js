import * as types from './ActionTypes';

export function login() {
  return {
    type: types.LOG_IN,
  };
}

export function logout() {
  return {
    type: types.LOG_OUT,
  };
}

export function changePage(page) {
  return {
    type: types.CHANGE_PAGE,
    page,
  };
}
