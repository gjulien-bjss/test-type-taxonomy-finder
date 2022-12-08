import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTypeFinderComponent } from './features/test-type-finder/test-type-finder.component';

export const routes: Routes = [
  {path: '**', component: TestTypeFinderComponent, data: {name: "Test Type Taxonomy Finder"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
