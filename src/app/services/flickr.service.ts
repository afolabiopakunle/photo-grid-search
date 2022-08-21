import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IFlickrOutput} from "../interfaces/iflickr-output";
import {IFlickrPhoto} from "../interfaces/iflickr-photo";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  flickrUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&'
  constructor(private http: HttpClient) { }

  keywordSearch(keyword:string) {
    const params = `api_key=${environment.flickr.apiKey}&text=${keyword}&per_page=6`

    return this.http.get<IFlickrOutput>(this.flickrUrl + params).pipe(map((res: IFlickrOutput)=> {
      const urlArr: any[] =[];
      res.photos.photo.forEach((photo: IFlickrPhoto) => {
        const photoObj = {
          url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
          title: photo.title
        }
        urlArr.push(photoObj);
      })
      return urlArr
    }))
  }

}