import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPage } from './folder.page';

import { FolderPageRoutingModule } from './folder-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FolderPageModule {}
