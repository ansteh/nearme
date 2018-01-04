import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
} from '@angular/material';

import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomMaterialModule { }
