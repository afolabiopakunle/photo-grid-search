import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {

  @Input() photos!: any[];

  constructor() { }

  ngOnInit(): void {}

}
