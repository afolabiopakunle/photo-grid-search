import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {

  photos!: any[];

  constructor() { }

  ngOnInit(): void {
    this.photos = [
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      },
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      },
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      },
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      },
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      },
      {
        src: 'https://a-z-animals.com/media/animals/images/original/lion1.jpg'
      }
    ]
  }

}
