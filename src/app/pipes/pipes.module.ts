import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { DropdownCategPipe } from './dropdown-categ.pipe';

@NgModule({
  declarations: [DropdownCategPipe],
  imports: [CommonModule, PipesRoutingModule],
  exports: [DropdownCategPipe],
})
export class PipesModule {}
