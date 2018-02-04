import { Component, Inject, Input, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-deal-dialog',
  templateUrl: './deal-dialog.component.html',
  styleUrls: ['./deal-dialog.component.scss']
})
export class DealDialogComponent implements OnInit {
  @Input() client: any;
  @Input() deal: any;

  constructor(public dialogRef: MatDialogRef<DealDialogComponent>) { }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.deal);
  }

}
