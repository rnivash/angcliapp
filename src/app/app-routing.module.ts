import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'config/:ordercode', component: ConfiguratorComponent },
  { path: '', component: CategoryComponent },
  { path: '**', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
