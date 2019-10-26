export type FunctionsName = 'search' | 'favourites';

export type stageImage = 'default' | 'favourite';

export interface ImageAttributes {
  url: string;
  stage?: stageImage;
}

export interface GalleryInitState {
  images: Array<any>;
  favourites?: Array<ImageAttributes>;
}
