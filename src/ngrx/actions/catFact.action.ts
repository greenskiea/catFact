import { createAction } from '@ngrx/store';
import { CatFact } from 'src/app/model/cat-fact.model';

export const catFactAction = {
  loadCatFact: createAction('[CatFact] Load CatFact'),
  loadCatFactSuccess: createAction(
    '[CatFact] Load CatFact Success',
    (catFact: CatFact[]) => ({ catFact })
  ),
  loadCatFactFailure: createAction(
    '[CatFact] Load CatFact Failure',
    (error: string) => ({ error })
  ),
};
