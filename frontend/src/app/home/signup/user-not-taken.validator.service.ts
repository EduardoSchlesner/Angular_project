import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, first, map, switchMap} from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken() {
    return (control: AbstractControl): Observable<{ [key: string]: boolean } | null> => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.http.get(`${API_URL}/user/exists/${userName}`)
        ))
        .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
        .pipe(first());
    };
  }
}
