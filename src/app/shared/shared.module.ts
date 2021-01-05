import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ],
  exports: [
    CommonModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class SharedModule { }
