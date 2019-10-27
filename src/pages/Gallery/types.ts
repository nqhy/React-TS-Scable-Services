export type FunctionsName = 'search' | 'favourites';

export type stageImage = 'default' | 'favourite';

export interface IndexType {
  indexSearch: number;
  indexFavourite: number;
}

export interface ImageAttributes {
  url: string;
  id: string;
  stage: stageImage;
  indexSearch: number;
  indexFavourite?: number;
}

export interface ToggleFavouriteActionParams {
  stage: stageImage;
  id: string;
  data: ImageAttributes;
}

export interface ImagesGiphy {
  original: any;
}

export interface ImageGiphyResponseData {
  type?: string;
  id: string;
  images: ImagesGiphy;
}

export interface PaginationResponse {
  total_count: number;
  count: number;
  offset: number;
}

export interface ImageResponseData {
  url: string;
  id: string;
  stage: stageImage;
  type: string;
  indexFavourite: number;
  indexSearch: number;
}

export interface ResultImageResponse<T> {
  data: Array<T>;
  pagination: PaginationResponse;
}

export interface ImageResponse<T> {
  result: ResultImageResponse<T>;
  isNewFetch: boolean;
  favouriteData?: Array<ImageResponseData>;
}

export interface GalleryInitState {
  data: Array<ImageResponseData>;
  pagination: PaginationResponse;
  errors: string;
  searchKey: string | undefined;
}

export interface FavouritesInitState {
  data: Array<ImageResponseData>;
  errors: string;
}
