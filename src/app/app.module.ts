import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CurrentWeatherComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
