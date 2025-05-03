import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormationsHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FormationsHomeComponent
  }
];

@NgModule({
  declarations: [
    FormationsHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormationsModule { } 