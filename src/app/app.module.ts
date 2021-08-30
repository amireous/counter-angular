import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterViewComponent } from './counter-view/counter-view.component';
import { ButtonElementsComponent } from './button-elements/button-elements.component';

@NgModule({
  declarations: [AppComponent, ButtonElementsComponent, CounterViewComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
