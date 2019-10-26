export type FunctionsName = 'search' | 'favourites';

export type stageImage = 'default' | 'favourite';

export interface ImageAttributes {
  url: string;
  id: string;
  stage?: stageImage;
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
  count: number;
  offset: number;
}

export interface ImageResponseData {
  url: string;
  id: string;
  stage?: stageImage;
  type: string;
}

export interface ImageResponse<T> {
  data: Array<T>;
  pagination: PaginationResponse;
}

export interface GalleryInitState<T> {
  data: Array<ImageResponse<T>>;
  pagination: PaginationResponse;
  favourites?: Array<ImageAttributes>;
  errors: string;
}
