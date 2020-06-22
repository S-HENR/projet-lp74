import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { VocabularyMenuComponent } from './vocabulary/vocabulary-menu/vocabulary-menu.component';
import { HistoryMenuComponent } from './history/history-menu/history-menu.component';
import { HistoryContentComponent } from './history/history-content/history-content.component';
import { VocabularyChoiceComponent } from './vocabulary/vocabulary-choice/vocabulary-choice.component';
import { VocabularyLessonComponent } from './vocabulary/vocabulary-lesson/vocabulary-lesson.component';
import { VocabularyQuizComponent } from './vocabulary/vocabulary-quiz/vocabulary-quiz.component';
const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'profil' , component: ProfilComponent },
  { path: 'vocabulary' , component: VocabularyMenuComponent },
  { path: 'history' , component: HistoryMenuComponent },
  { path: 'history/:id', component: HistoryContentComponent },
  { path: 'vocabulary/:id', component: VocabularyChoiceComponent },
  { path: 'vocabulary/:id/lesson', component: VocabularyLessonComponent },
  { path: 'vocabulary/:id/quiz', component: VocabularyQuizComponent },
  
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
