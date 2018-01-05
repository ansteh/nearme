import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DealsState } from './deals.model';

@Injectable()
export class DealsService {
  public state: Observable<DealsState>;

  constructor(private store: Store<any>) {
    this.state = this.store.select('deals');
  }

}
