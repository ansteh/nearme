import { combineReducers, StoreModule } from '@ngrx/store';

import { dealsReducer } from './deals/deals.reducer';

const reducers = {
    deals: dealsReducer,
};

export const DealsStore = StoreModule.forRoot(reducers)
