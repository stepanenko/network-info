import { NgModule } from '@angular/core';
import { TabnavModule } from './tabnav/tabnav.module';
import { UnderConstructionModule } from './under-construction/under-construction.module';

@NgModule({
  imports: [
    TabnavModule,
    UnderConstructionModule
  ],
  exports: [
    TabnavModule,
    UnderConstructionModule
  ],
  declarations: []
})

export class CommonComponentsModule { }