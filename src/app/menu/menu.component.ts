import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { concatMap, delay, filter, interval, map, mergeMap, Observable, of, Subject, switchMap, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  interval$!:Observable<String>;
  redTrainsCalling=0;
  yellowTrainsCalling=0;
  private destroy$!:Subject<boolean>

  ngOnInit(): void {
      // this.interval$=interval(1000).pipe(
      //   // filter(value=>value%3 ===0 ),
      //   map(value=>value%2 === 0 ? `je suis ${value} et je suis pair`: `je suis ${value} et je suis impair`)
      // );
      // this.destroy$=new Subject<boolean>();

      // interval(500).pipe(
      //   takeUntil(this.destroy$),
      //   map(value=>value%2==0? 'rouge':'jaune'),
      //   tap(color=>console.log(`La lumière s'allume en %c${color}`,`color:${this.translateColor(color)}`)),
      //   switchMap(color=>this.getTrainsObservaleColor$(color)),
      //  // tap(train=>console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`,`font-weight:bold; color:${this.translateColor(train.color)}`))
      // ).subscribe()
  }

  // ngOnDestroy(): void {
  //    this.destroy$.next(true); 
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }
  // getTrainsObservaleColor$(color: 'rouge'| 'jaune'){
  //    const isRedTrain=color=='rouge';
  //    isRedTrain? this.redTrainsCalling ++: this.yellowTrainsCalling++;
  //   const  trainIndex= isRedTrain? this.redTrainsCalling: this.yellowTrainsCalling;
  //   console.log(`Train %c${color} ${trainIndex} appelé!`, `text-decoration:underline; color:${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
    
  // }

}
