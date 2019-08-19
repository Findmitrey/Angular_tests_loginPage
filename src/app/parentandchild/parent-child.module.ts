import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';

import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    ParentChildRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ]
})
export class ParentChildModule { }
