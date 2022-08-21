import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  flickrUrl = 'https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value'
  constructor(private http: HttpClient) { }

  keywordSearch() {
    const params = `api_key=${environment.flickr.apiKey}`
  }
}
