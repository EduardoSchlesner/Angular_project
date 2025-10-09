import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300)); // Espera 300ms após o usuário parar de digitar
  }
  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
