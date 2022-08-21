import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  constructor() { }
  @Input() photo: any;

  ngOnInit(): void {
  }

}
