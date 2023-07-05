import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CardComponent } from './components/card/card.component';
import { UserComponent } from './components/user/user.component';
import { AgePipe } from './core/pipes/age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScreenComponent,
    CardComponent,
    UserComponent,
    AgePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
