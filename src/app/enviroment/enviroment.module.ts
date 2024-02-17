import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {TreeViewComponent} from '../tree-view/tree-view.component';

@NgModule({
  declarations: [
    EnviromentComponent,
  ],
  imports: [
    CommonModule,
    TreeViewComponent,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }