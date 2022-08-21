import {IFlickrPhoto} from "./iflickr-photo";

export interface IFlickrOutput {
  photos: {
    photo: IFlickrPhoto[];
  }
}
