import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ObrasSocialesComponent } from './obras-sociales/obras-sociales.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { ReCaptchaModule } from 'angular5-recaptcha';
import { MenuService } from './shared/menu.service';

const routes: Routes = [
  {
      path: '',
      component: AppComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObrasSocialesComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA-8Lp8NpFbw7v7I-gvLVJB2bq_ld_r_-o'
    })
  ],
  providers: [ MenuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
