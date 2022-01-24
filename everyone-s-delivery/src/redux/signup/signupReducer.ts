import { Action, ActionType, LoginData } from "../../model/model";
import createReducer from "../createReducer";

export interface SignupReducerType {
  email: string;
  password: string;
  address: string;
  loading: boolean;
  error?: string;
  token: string;
}
const defaultState: SignupReducerType = {
  email: "",
  password: "",
  address: "",
  loading: false,
  error: undefined,
  token: "",
};

export const signupReducer = createReducer<SignupReducerType>(defaultState, {
  [ActionType.SIGNUP](state: SignupReducerType, action: Action<LoginData>) {
    return {
      ...state,
      loading: true,
    };
  },

  [ActionType.SIGNUP_ERROR](state: SignupReducerType, action: Action<number>) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },

  [ActionType.SIGNUP_SUCCESS](
    state: SignupReducerType,
    action: Action<number>
  ) {
    return {
      ...state,
      loading: false,
      error: null,
      token: action.payload,
    };
  },
});
