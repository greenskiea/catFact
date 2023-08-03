import { CatFact } from 'src/app/model/cat-fact.model';

export interface CatFactState {
  catFact: CatFact[];
  isLoading: boolean;
  error: string;
}
