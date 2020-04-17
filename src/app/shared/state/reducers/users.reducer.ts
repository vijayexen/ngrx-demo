import { UserSignUpActions } from '../actions/user.signup.actions';
import { UserLoginAction } from '../actions/user.login.actions';

export function userReducer(state, action): any {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case UserSignUpActions.SIGNUP_USER: {
      console.log('Action Payload: ', action.payload);
      console.log('State: ', state);
      return {
        ...state,
        ...action.payload
      };
    }
    case UserLoginAction.LOGIN_USER: {
      console.log('Logging in User');
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
