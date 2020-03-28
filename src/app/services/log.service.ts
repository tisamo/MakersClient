import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logged = false;
}
