import { ActionType, SignupData } from "model/model";

export const signupAction = (payload: SignupData) => {
  console.log("액션왔어용 사인업");

  return {
    type: ActionType.SIGNUP,
    payload,
  };
};
