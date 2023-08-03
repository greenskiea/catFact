import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatFactService } from 'src/app/service/cat-fact.service';
import { catFactAction } from '../actions/catFact.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CatFact } from 'src/app/model/cat-fact.model';

@Injectable()
export class CatFactEffects {
  constructor(private actions$: Actions, private catSerVice: CatFactService) {}

  loadCatFact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catFactAction.loadCatFact),
      switchMap(() =>
        this.catSerVice.getCatFact(10).pipe(
          map((data: any) => {
            data = data['data'];
            this.catSerVice.getCatImage(10).subscribe((newImage) => {
              newImage = newImage.map((data: any) => data['url']);
              console.log(newImage);
              data.forEach((element: CatFact, index: number) => {
                element = {
                  ...element,
                  imageURL: newImage[index],
                };
              });
            });
            console.log(data);
            return catFactAction.loadCatFactSuccess(data);
          }),
          catchError((error) => of(catFactAction.loadCatFactFailure(error)))
        )
      )
    )
  );
}
