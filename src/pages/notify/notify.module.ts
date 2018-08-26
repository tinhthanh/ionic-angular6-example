import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NotifyPage } from './notify';

@NgModule({
  declarations: [
    NotifyPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifyPage),
    TranslateModule.forChild()
  ],
  exports: [
    NotifyPage
  ]
})
export class NotifyPageModule { }
