import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter = '';

  debounce: Subject<string> = new Subject<string>();
  private debounceSubscription: Subscription;

  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(300)) // Espera 300ms após o usuário parar de digitar
      .subscribe(filterValue => this.filter = filterValue);
  }
  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }
  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
