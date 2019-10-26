export interface GalleryInitState {
  images: Array<any>;
}

export type FunctionsName = 'search' | 'favourites';

export type stageImage = 'default' | 'favourite';

export interface ImageAttributes {
  url: string;
}
