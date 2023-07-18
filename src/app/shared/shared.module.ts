import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
  ],
  declarations: [
    MenuComponent
  ],
  providers: [],
})
export class SharedModule { }
