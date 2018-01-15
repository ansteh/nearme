import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'nearme-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  public stores: any[] = [{
    id: 1,
    type: 'STORE',
    position: {
      longitude: 6.76,
      latitude: 49.3074
    },
    description: 'Hello store!'
  }];

  public runners: any[] = [{
    id: 2,
    type: 'RUNNER',
    position: {
      longitude: 7,
      latitude: 49.2333
    },
    description: 'Hello runner!'
  }];

  public requests: any[] = [{
    id: 3,
    type: 'REQUEST',
    position: {
      longitude: 6.6312,
      latitude: 49.4471
    },
    description: 'Hello request!'
  }];

  public deals: any[];
  public newDeal: any;

  constructor() { }

  ngOnInit() {
    this.deals = _.flatten([this.stores, this.runners, this.requests]);
  }

  showDealEditor(deal: any) {
    this.newDeal = deal;

    if(_.has(this.newDeal, 'position') === false) {
      _.set(this.newDeal, 'position', {});
    }

    console.log(this.newDeal);
  }

  save() {
    if(_.has(this.newDeal, 'id')) {
      this.deals = [...this.deals];
    } else {
      this.deals = [...this.deals, this.newDeal];
    }

    this.newDeal = null;
  }

}
