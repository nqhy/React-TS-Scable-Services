import { useDispatch } from 'react-redux';

import { removeFavourite, addFavourite } from '../Favourites/actions';
import {
  ToggleFavouriteActionParams,
  IndexType,
  ImageAttributes,
} from '../types';

export default () => {
  // Hooks Redux
  const dispatch = useDispatch<any>();

  const toggleFavourite = ({
    stage,
    id,
    data,
  }: ToggleFavouriteActionParams) => {
    let payload;
    const isTagged = stage === 'favourite';
    if (isTagged) {
      payload = {
        indexFavourite: data.indexFavourite,
        indexSearch: data.indexSearch,
      };
    } else {
      const requestData = {
        ...data,
        stage: 'favourite',
      };

      payload = requestData;
    }
    if (isTagged) return dispatch(removeFavourite(payload));
    return dispatch(addFavourite(payload));
  };

  return [toggleFavourite];
};
