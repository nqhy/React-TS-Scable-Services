import { createActionTypes } from '../../../redux/utils/createReduxActions';

export const context = 'gallery';

export const [
  GALLERY_REQUEST,
  GALLERY_SUCCESS,
  GALLERY_FAIL,
] = createActionTypes(context);

export const SET_SEARCH_KEY = 'setSearchKey';
