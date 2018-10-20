import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PetsComponent]
})
export class AppModule { }
