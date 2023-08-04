import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatFactService } from 'src/app/service/cat-fact.service';
import { catFactAction } from '../actions/catFact.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, zip } from 'rxjs';
import { CatFact } from 'src/app/model/cat-fact.model';

@Injectable()
export class CatFactEffects {
  constructor(private actions$: Actions, private catSerVice: CatFactService) {}

  loadCatFact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catFactAction.loadCatFact),
      switchMap(() =>
        zip(
          this.catSerVice.getCatFact(10),
          this.catSerVice.getCatImage(10)
        ).pipe(
          map(([catFacts, catImages]) => {
            let facts = catFacts['data'];
            let images = catImages.map((data: any) => data['url']);

            let result: CatFact[] = [];

            for (let index = 0; index < 10; index++) {
              result.push({
                id: facts[index].id,
                fact: facts[index].fact,
                imageURL: images[index],
                length: facts[index].length,
              });
            }

            console.log(result);
            return catFactAction.loadCatFactSuccess(result);
          }),
          catchError((error) => of(catFactAction.loadCatFactFailure(error)))
        )
      )
    )
  );
}
