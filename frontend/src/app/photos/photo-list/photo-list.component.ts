import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {Photo} from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter = '';

  debounce: Subject<string> = new Subject<string>();
  private debounceSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(300)) // Espera 300ms após o usuário parar de digitar
      .subscribe(filterValue => this.filter = filterValue);
  }
  ngOnDestroy(): void {
    this.debounceSubscription.unsubscribe();
  }
}
