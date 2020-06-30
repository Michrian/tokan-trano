import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./routine/routine.module').then( m => m.RoutinePageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'parcours-inscription',
    loadChildren: () => import('./parcours-inscription/parcours-inscription.module').then( m => m.ParcoursInscriptionPageModule)
  },
  {
    path: 'form-ajout-enfant',
    loadChildren: () => import('./Modal/form-ajout-enfant/form-ajout-enfant.module').then( m => m.FormAjoutEnfantPageModule)
  },
  {
    path: 'form-ajout-routine',
    loadChildren: () => import('./Modal/form-ajout-routine/form-ajout-routine.module').then( m => m.FormAjoutRoutinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
