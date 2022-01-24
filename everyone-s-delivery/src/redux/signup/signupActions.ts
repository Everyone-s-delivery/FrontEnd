import { ActionType, SignupData } from "model/model";

export const signupAction = (payload: SignupData) => {
  return {
    type: ActionType.SIGNUP,
    payload,
  };
};
