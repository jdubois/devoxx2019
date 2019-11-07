import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Devoxx2019SharedModule } from 'app/shared/shared.module';
import { Devoxx2019CoreModule } from 'app/core/core.module';
import { Devoxx2019AppRoutingModule } from './app-routing.module';
import { Devoxx2019HomeModule } from './home/home.module';
import { Devoxx2019EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Devoxx2019SharedModule,
    Devoxx2019CoreModule,
    Devoxx2019HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Devoxx2019EntityModule,
    Devoxx2019AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Devoxx2019AppModule {}
