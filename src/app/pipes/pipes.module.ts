import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { DropdownCategPipe } from './dropdown-categ.pipe';
import { ShowThreeStringPipe } from './show-three-string.pipe';
import { ShowSmallDescriptionPipe } from './show-small-description.pipe';

@NgModule({
  declarations: [
    DropdownCategPipe,
    ShowThreeStringPipe,
    ShowSmallDescriptionPipe,
  ],
  imports: [CommonModule, PipesRoutingModule],
  exports: [DropdownCategPipe, ShowThreeStringPipe, ShowSmallDescriptionPipe],
})
export class PipesModule {}
