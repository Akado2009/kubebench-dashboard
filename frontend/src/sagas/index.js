import { take, put, call, fork, select, all, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';

// const shittyOne = () => {
//     return {
//         type: 'REQUESTED_SHIT'
//     }
// };
//
// function* watchShitty() {
//     yield takeEvery('REQUESTED_SHIT', shittyOneAsync);
// }
//
// function* shittyOneAsync() {
//     try {
//         const data = yield call(() => {
//             //send request here
//             fetch('https://dog.ceo/api/breeds/image/random')
//                 .then(res => res.json())
//         })
//
//     }catch(error) {
//         yield  put('SHIT');
//     }
// }

export default function* rootSaga() {
    yield all([
    ])
}