import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
  @Input() deal: any;
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
