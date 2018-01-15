import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';

import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomMaterialModule { }
