import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { VocabularyMenuComponent } from './vocabulary/vocabulary-menu/vocabulary-menu.component';
import { HistoryMenuComponent } from './history/history-menu/history-menu.component';
import { HistoryContentComponent } from './history/history-content/history-content.component';
import { VocabularyChoiceComponent } from './vocabulary/vocabulary-choice/vocabulary-choice.component';
import { VocabularyLessonComponent } from './vocabulary/vocabulary-lesson/vocabulary-lesson.component';
import { VocabularyQuizComponent } from './vocabulary/vocabulary-quiz/vocabulary-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProfilComponent,
    VocabularyMenuComponent,
    HistoryMenuComponent,
    HistoryContentComponent,
    VocabularyChoiceComponent,
    VocabularyLessonComponent,
    VocabularyQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
