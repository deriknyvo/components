import { NgModule } from '@angular/core';
import {
  MatInputModule, 
  MatIconModule, 
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialDesignModule {}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */