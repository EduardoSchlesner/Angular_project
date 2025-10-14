import {NgModule} from '@angular/core';
import {SignInComponent} from './signin/signin.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {VMessageModule} from '../shared/component/vmessage/vmessage.module';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule { }
