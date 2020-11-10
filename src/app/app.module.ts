import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';
import { HeaderComponent } from './header/header.component';
import { CreateMonsterComponent } from './create-monster/create-monster.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    HeaderComponent,
    CreateMonsterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
