import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentComponent } from './pages/assesment/assesment.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: '', redirectTo:  'ctegories', pathMatch: 'prefix'},
  {path: 'assessment', component:  AssesmentComponent},
  {path: 'ctegories', component:  CategoriesComponent},
  {path: 'score', component:  ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
