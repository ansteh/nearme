import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { DealDialogComponent } from './deal-dialog/deal-dialog.component';

import * as _ from 'lodash';

@Component({
  selector: 'nearme-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  // encapsulation: ViewEncapsulation.None
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
  public position: any;

  private dialogRef: MatDialogRef<DealDialogComponent>;

  constructor(public dialog: MatDialog,
              public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.deals = _.flatten([this.stores, this.runners, this.requests]);
  }

  showDealEditor(deal: any) {
    if(_.has(deal, 'position') === false) {
      _.set(deal, 'position', this.position || {});
    }

    console.log(deal);

    this.openDialog(deal);
  }

  save(deal: any) {
    if(_.has(deal, 'id')) {
      this.deals = [...this.deals];
    } else {
      this.deals = [...this.deals, deal];
    }
  }

  openDialog(deal: any) {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(DealDialogComponent, config);
    this.dialogRef.componentInstance.client = { email: '' };
    this.dialogRef.componentInstance.deal = deal;

    this.dialogRef.afterClosed()
      .subscribe((deal: any) => {
        if(deal) {
          this.save(deal);
        }

        this.position = null;
      });
  }

}
