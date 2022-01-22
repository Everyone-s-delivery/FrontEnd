import { all } from 'redux-saga/effects';

import listinSagas from '../redux/listing/listingSaga';

export default function* startForman() {
    yield all([
        ...listinSagas,
    ]);
}