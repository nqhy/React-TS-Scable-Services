import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GALLERY_REQUEST } from './constants';
import { gallerySuccess, galleryFail } from './actions';
import { sampleService } from '../../services';

export function* fetchGallerySaga() {
  try {
    yield call([sampleService, sampleService.fetchData]);
    yield put(gallerySuccess());
  } catch (err) {
    console.log(err)
    yield put(galleryFail(err));
  }
}

export default function* root() {
  yield all([takeLatest(GALLERY_REQUEST, fetchGallerySaga)]);
}
