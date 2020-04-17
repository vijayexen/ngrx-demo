import { IPerson } from '../../_models/IPerson.model';
import { UserSignUpActions } from '../actions/user.signup.actions';

const personInitialState: IPerson = {
  emailAddress: ''
};

export const INITIAL_SIGNUP_STATE = {
  loading: false,
  personDetails: personInitialState,
  error: null
};
