import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabnavComponent } from './tabnav.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ TabnavComponent ],
  exports: [ TabnavComponent ]
})
export class TabnavModule { }
