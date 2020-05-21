import * as types from '../actions/ActionTypes';

export const initialState = {
  isLogin: false,
  curPage: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isLogin: true,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLogin: false,
      };
    case types.CHANGE_PAGE:
      return {
        ...state,
        curPage: action.page,
      };
    default:
      return state;
  }
}
