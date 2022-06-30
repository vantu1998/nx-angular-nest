import {ChangeDetectionStrategy, Component, NgModule, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterModule} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SecurityControllerService} from '@nx-with-chau-tran/web/shared-data-access-api-sdk';
import {TokenResultDto} from '@nx-with-chau-tran/api/shared-data-access-dtos';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'ct-login',
  template: `
    <mat-toolbar color="primary">
      <img class="w-10 h-10" src="assets/logo.svg" alt="Logo">
    </mat-toolbar>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-center">
        <span class="text-4xl font-bold mb-2">Log In</span>
      </div>
      <div class="text-center my-4 text-blue-500">
        <a routerLink="/register" class="hover:underline">
          Do not have an account? Create one
        </a>
      </div>
      <mat-card class="w-[400px] mx-auto">
        <form [formGroup]="loginForm" class="flex flex-col">
          <mat-form-field appearance="outline">
            <mat-icon matPrefix>person</mat-icon>
            <mat-label>User name</mat-label>
            <input matInput formControlName="username" maxlength="128">
            <mat-error
                    *ngIf="loginForm.controls['username'].hasError('email') && !loginForm.controls['username'].hasError('required')">
              Please input valid email
            </mat-error>
            <mat-error *ngIf="loginForm.controls['username'].hasError('required')">
              Email is <strong>required</strong>
            </mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-icon matPrefix>lock</mat-icon>
            <mat-icon (click)="isShowPassword = !isShowPassword" matSuffix>{{isShowPassword ? 'visibility' : 'visibility_off'}}</mat-icon>
            <mat-label>Password</mat-label>
            <input matInput [type]="isShowPassword ? 'text' : 'password'" formControlName="password">
            <mat-error *ngIf="loginForm.controls['password'].hasError('required')">
              Password is <strong>required</strong>
            </mat-error>
          </mat-form-field>
        </form>
      </mat-card>
      <div class="mt-6">
        <button color="primary" mat-raised-button class="w-full" (click)="login()">
          Login
        </button>
      </div>

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isShowPassword = false;
  constructor(
    private securityService: SecurityControllerService,
    private router: Router) {
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.securityService.login(this.loginForm.value).subscribe((token: TokenResultDto) => {
      void this.router.navigate(['']);
    });
  }
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule
  ],
  exports: [LoginComponent]
})
export class LoginComponentModule {
}
