import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Devoxx2019SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Devoxx2019SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Devoxx2019HomeModule {}
