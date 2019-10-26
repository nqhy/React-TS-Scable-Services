import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GALLERY_REQUEST } from './constants';
import { gallerySuccess, galleryFail } from './actions';
import { searchServiceByGiphy } from '../../services';

export function* fetchGallerySaga() {
  try {
    const response = yield call(
      [searchServiceByGiphy, searchServiceByGiphy.getImages],
      'cat',
    );
    yield put(gallerySuccess());
  } catch (err) {
    yield put(galleryFail(err));
  }
}

export default function* root() {
  yield all([takeLatest(GALLERY_REQUEST, fetchGallerySaga)]);
}
