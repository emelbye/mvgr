import { Injectable, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MenuService {

  private subject: Subject<string>;

  constructor() {
    this.subject = new Subject();
   }

  setActiveItem(item){
      this.subject.next(item);
  }

  getActiveItem(): Subject<string> {
      return this.subject;
  }

}
