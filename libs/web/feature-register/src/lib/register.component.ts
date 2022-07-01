import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {SecurityControllerService} from '@nx-angular-nest/web/shared-data-access-api-sdk';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'ct-register',
  template: `
    <mat-toolbar color="primary">
      <img class="w-10 h-10" src="assets/logo.svg" alt="Logo">
    </mat-toolbar>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="text-center">
        <span class="text-4xl font-bold mb-2">Register</span>
      </div>
      <div class="text-center my-4 text-blue-500">
        <a routerLink="/login" class="hover:underline">
          If you have an account? Login
        </a>
      </div>
      <mat-card class="w-[400px] mx-auto">
        <form class="flex flex-col" [formGroup]="registerForm">
          <mat-form-field appearance="outline">
            <mat-icon matPrefix>person</mat-icon>
            <mat-label>User name</mat-label>
            <input matInput formControlName="username" maxlength="128">
            <mat-error
                    *ngIf="registerForm.controls['username'].hasError('email') && !registerForm.controls['username'].hasError('required')">
              Please input valid email
            </mat-error>
            <mat-error *ngIf="registerForm.controls['username'].hasError('required')">
              Email is <strong>required</strong>
            </mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-icon matPrefix>lock</mat-icon>
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password">
            <mat-error *ngIf="password?.hasError('required')">
              Password is <strong>required</strong>
            </mat-error>
            <mat-error *ngIf="password?.hasError('minlength')">
              Password must be have at least <strong>8</strong> character
            </mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-icon matPrefix>lock</mat-icon>
            <mat-label>Confirm password</mat-label>
            <input matInput type="password" formControlName="confirmPassword">
            <mat-error *ngIf="confirmPassword?.hasError('required')">
              Confirm password is <strong>required</strong>
            </mat-error>
            <mat-error *ngIf="confirmPassword?.hasError('minlength')">
              Confirm password must be have at least <strong>8</strong> character
            </mat-error>
            <mat-error *ngIf="confirmPassword?.hasError('confirmPasswordNotMatch')">
              Confirm password not match
            </mat-error>
          </mat-form-field>
        </form>
      </mat-card>
      <div class="mt-6">
        <button color="primary" mat-raised-button class="w-full" (click)="register()">
          Register
        </button>
      </div>

    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private securityService: SecurityControllerService,
    private router: Router) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(128)]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, [this.validatePassword]);
  }

  validatePassword(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (confirmPassword?.value.length === 0) {
      confirmPassword.setErrors({required: true});
      return null;
    }
    if (password?.valid && password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({confirmPasswordNotMatch: true})
    }
    return null;
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  register() {
    return null;
  }
}

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [RegisterComponent]
})
export class RegisterComponentModule {
}
