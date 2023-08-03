import { Component, OnInit } from '@angular/core';
import { CatFactService } from './service/cat-fact.service';
import { CatFact } from './model/cat-fact.model';
import { Observable } from 'rxjs';
import { CatFactState } from 'src/ngrx/states/catFact.state';
import { Store } from '@ngrx/store';
import { catFactAction } from 'src/ngrx/actions/catFact.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listFact$: Observable<CatFact[]>;

  constructor(private store: Store<{ catFact: CatFactState }>) {
    this.listFact$ = store.select((state) => state.catFact.catFact);
  }

  ngOnInit(): void {
    this.getCatFact();
  }

  async getCatFact() {
    this.store.dispatch(catFactAction.loadCatFact());
  }
}
