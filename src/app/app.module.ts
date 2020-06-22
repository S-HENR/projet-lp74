import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { VocabularyMenuComponent } from './vocabulary-menu/vocabulary-menu.component';
import { HistoryMenuComponent } from './history-menu/history-menu.component';
import { HistoryContentComponent } from './history-content/history-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProfilComponent,
    VocabularyMenuComponent,
    HistoryMenuComponent,
    HistoryContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
