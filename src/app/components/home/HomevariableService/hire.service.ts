import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  hire = 'col-12';
  search = 'col-12';
  poly = false;
  hireTime = false;
  searchTime = false;
  constructor() {
  }
}
