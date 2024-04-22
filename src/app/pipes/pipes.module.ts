import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { DropdownCategPipe } from './dropdown-categ.pipe';
import { ShowThreeStringPipe } from './show-three-string.pipe';

@NgModule({
  declarations: [DropdownCategPipe, ShowThreeStringPipe],
  imports: [CommonModule, PipesRoutingModule],
  exports: [DropdownCategPipe, ShowThreeStringPipe],
})
export class PipesModule {}
