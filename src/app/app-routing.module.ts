import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ExampleComponent } from './example/example.component';
import { ParamsComponent } from './params/params.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'table', component: TableComponent},
  {path: 'example', component: ExampleComponent, children: [
    {path: 'params/:paramId', component: ParamsComponent}
  ]},
  {path: 'parent', loadChildren: () => import('./parentandchild/parent-child.module').then(mod => mod.ParentChildModule)},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
