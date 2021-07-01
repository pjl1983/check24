import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { TeaserModule } from './teaser/teaser.module';
import { VergleichModule } from './vergleich/vergleich.module';
import { FooterModule } from './footer/footer.module';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    TeaserModule,
    VergleichModule,
    FooterModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE'
  }],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
