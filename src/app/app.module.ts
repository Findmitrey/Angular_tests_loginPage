import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';

import {SubmitService} from './shared/services/submit.service';
import {CommunicationService} from './parentandchild/communication.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ExampleComponent } from './example/example.component';
import { RegistrationComponent } from './registration/registration.component';
import { ParamsComponent } from './params/params.component';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parentandchild/parent/parent.component';
import { Child1Component } from './parentandchild/child1/child1.component';
import { Child2Component } from './parentandchild/child2/child2.component';
import { Child3Component } from './parentandchild/child3/child3.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'table', component: TableComponent},
  {path: 'example', component: ExampleComponent, children: [
    {path: 'params/:paramId', component: ParamsComponent}
  ]},
  {path: 'parent', component: ParentComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
  ];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    ExampleComponent,
    RegistrationComponent,
    ParamsComponent,
    TableComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    HttpClientModule 
  ],
  entryComponents: [ModalComponent],
  providers: [SubmitService,CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule {}