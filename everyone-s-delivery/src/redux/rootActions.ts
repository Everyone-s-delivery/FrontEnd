import * as AuthenticationActions from "redux/authentication/authenticationActions";
import * as ListingActions from "redux/listing/listingActions";
import * as signupActions from "redux/signup/signupActions";

export const ActionCreators = Object.assign(
  {},
  { ...ListingActions, ...AuthenticationActions, ...signupActions }
);
