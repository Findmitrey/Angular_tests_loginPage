import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import {AppRoutingModule } from './app-routing.module';
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
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ExampleComponent } from './example/example.component';
import { ParamsComponent } from './params/params.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    ExampleComponent,
    ParamsComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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