import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  /**
   * array do tipo any
   */
  rows = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }
  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3)); // pegando a fatia do photos 0 1 2 (de zero a dois, sem contar o 3)
    }
    return newRows;
  }

}

