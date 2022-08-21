import { Component, OnInit } from '@angular/core';
import {FlickrService} from "../services/flickr.service";
import {IFlickrPhoto} from "../interfaces/iflickr-photo";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  photos!: IFlickrPhoto[];
  keyword!: string;

  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if(this.keyword && this.keyword.length > 0) {
      this.flickrService.keywordSearch(this.keyword)
        .subscribe({
          next:(response) => {
            this.photos = response;
          },
          error: (error) => {
            console.log(error)
          }
        })


    }
  }

  onScroll() {
    console.log('scrolled')
    if(this.keyword && this.keyword.length > 0) {
      this.flickrService.keywordSearch(this.keyword)
        .subscribe(response => {
          this.photos = [...this.photos,...response];
        })
    }
  }

}
