import { DealsState } from './deals.model';
import { Action } from '@ngrx/store';

const defaultState: DealsState = {
  deals: [],
};

export class DealsActions {
  public static SET_DEFAULT = 'DEALS-SET_DEFAULT';
  public static DEALS_LOADED = 'DEALS-DEALS-LOADED';
}

export function dealsReducer (state: DealsState = defaultState, { type, payload }) {
  switch (type) {
    case <string>DealsActions.SET_DEFAULT:
      return Object.assign({}, defaultState);

    case <string>DealsActions.DEALS_LOADED:
      return Object.assign({}, state, { deals: payload });

    default:
      return state;
  }
}
