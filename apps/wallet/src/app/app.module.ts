import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LTO_PUBLIC_API } from '@legalthings-one/platform';
import { AMOUNT_DIVIDER, LINKS_OUTLET_NAME } from '@legalthings-one/component-kit';
import { LTO_NETWORK_BYTE } from './tokens';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: LTO_NETWORK_BYTE,
      useValue: 'T'
    },
    {
      provide: LTO_PUBLIC_API,
      // useValue: 'https://nodes.wavesnodes.com/'
      useValue: 'https://testnet.legalthings.one/'
    },
    {
      provide: LINKS_OUTLET_NAME,
      useValue: 'public'
    },
    {
      provide: AMOUNT_DIVIDER,
      useValue: 100000000
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
