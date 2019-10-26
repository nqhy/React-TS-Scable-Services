import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GALLERY_REQUEST } from './constants';
import { gallerySuccess, galleryFail } from './actions';
import { searchServiceByGiphy } from '../../services';
import { ImageResponse } from './types';

export function* fetchGallerySaga(action: any) {
  try {
    const { payload } = action;
    const { data }: any = yield call(
      [searchServiceByGiphy, searchServiceByGiphy.getImages],
      payload,
    );
    yield put(gallerySuccess(data));
  } catch (err) {
    yield put(galleryFail(err));
  }
}

export default function* root() {
  yield all([takeLatest(GALLERY_REQUEST, fetchGallerySaga)]);
}
