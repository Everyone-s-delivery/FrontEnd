import { call, fork, put, takeLatest } from "redux-saga/effects";
import { createApiCall, MethodType, signupRoute } from "services/Api";
import { ActionType, SignupData } from "../../model/model";
import { setCookie } from "../../utils/cookies";

// signup
function* signupSaga({ payload }: { payload: SignupData }): Generator<any> {
  try {
    const response: any = yield call(createApiCall, {
      method: MethodType.POST,
      url: signupRoute,
      data: payload,
    });
    if (response.status === "ok") {
      //   setCookie("token", response.data.authToken.token);
      yield put({
        type: ActionType.SIGNUP_SUCCESS,
        payload: "", //response.data.authToken.token,
      });
    } else {
      yield put({ type: ActionType.SIGNUP_ERROR, payload: "error" });
    }
  } catch (error) {
    yield put({ type: ActionType.SIGNUP_ERROR, payload: "error" });
  }
}
function* onSignupSubmitWatcher() {
  yield takeLatest(ActionType.SIGNUP as any, signupSaga);
}

export default [fork(onSignupSubmitWatcher)];
