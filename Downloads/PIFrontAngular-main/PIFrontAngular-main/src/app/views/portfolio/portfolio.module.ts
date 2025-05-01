import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioHomeComponent
  }
];

@NgModule({
  declarations: [
    PortfolioHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PortfolioModule { } 