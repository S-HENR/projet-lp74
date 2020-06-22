import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { VocabularyMenuComponent } from './vocabulary-menu/vocabulary-menu.component';
import { HistoryMenuComponent } from './history-menu/history-menu.component';
import { HistoryContentComponent } from './history-content/history-content.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'profil' , component: ProfilComponent },
  { path: 'vocabulary' , component: VocabularyMenuComponent },
  { path: 'history' , component: HistoryMenuComponent },
  { path: 'history/:id', component: HistoryContentComponent},
  
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
