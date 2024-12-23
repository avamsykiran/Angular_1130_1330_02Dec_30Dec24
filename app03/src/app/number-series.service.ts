import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    const task = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error(`lower bound ${lb} is greater than the upper bound ${ub}!`);
        return;
      }

      let n = lb;
      const handle = setInterval( () => {
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(handle);
          observer.complete();
        }
      }, 500);
    };

    return new Observable(task);
  }
}
