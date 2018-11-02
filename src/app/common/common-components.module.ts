import { NgModule } from '@angular/core';
import { TabnavModule } from './tabnav/tabnav.module';

@NgModule({
  imports: [
    TabnavModule
  ],
  exports: [
    TabnavModule
  ]
})
export class CommonComponentsModule { }
