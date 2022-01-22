import { History } from "history";
import { combineReducers } from "redux";
import { routerReducer, RouterState } from 'react-router-redux'

import { listingReducer, ListingReducerType } from "../redux/listing/listingReducer";

export interface RootState {
    listing: ListingReducerType;
    // loginForm: AuthenticationReducerType
    routerReducer: RouterState,
}

export default (history: History) =>
    combineReducers({
        listing: listingReducer,
        // loginForm: authenticationReducer,
        routerReducer,
    });