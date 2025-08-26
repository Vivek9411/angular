import { Component, signal, computed, ChangeDetectionStrategy, effect } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div class="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6 md:p-10 transform transition-all hover:scale-105">
        <div class="text-center">
          <!-- Facebook-like login logo -->
          <svg class="h-16 w-16 mx-auto text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.084 3.657 9.317 8.438 10.193v-7.058H7.72V12h2.718V9.75c0-2.671 1.63-4.12 3.99-4.12 1.144 0 2.124.205 2.414.296v2.798h-1.66c-1.311 0-1.567.625-1.567 1.543V12h3.136l-.51 3.235h-2.626v7.058C18.343 21.317 22 17.084 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <h1 class="text-3xl font-bold text-gray-800">Log In</h1>
          <p class="text-gray-500 mt-2">Connect to your account</p>
        </div>

        <!-- Login Form -->
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <!-- Email Field -->
          <div>
            <input
              type="email"
              placeholder="Email or phone number"
              formControlName="email"
              class="w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
              [class.border-red-500]="emailErrors()"
            />
            <!-- Conditional Error Message for Email -->
            @if (emailErrors()) {
              <p class="mt-1 text-sm text-red-500">{{ emailErrors() }}</p>
            }
          </div>

          <!-- Password Field -->
          <div>
            <input
              type="password"
              placeholder="Password"
              formControlName="password"
              class="w-full px-4 py-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
              [class.border-red-500]="passwordErrors()"
            />
            <!-- Conditional Error Message for Password -->
            @if (passwordErrors()) {
              <p class="mt-1 text-sm text-red-500">{{ passwordErrors() }}</p>
            }
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            [disabled]="loginForm.invalid"
            class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed shadow-md"
          >
            Log In
          </button>
        </form>

        <!-- Forgot password and sign up links -->
        <div class="text-center text-sm text-gray-500">
          <a href="#" class="text-blue-600 hover:underline">Forgot password?</a>
          <span class="mx-2">•</span>
          <a href="#" class="text-blue-600 hover:underline">Create a new account</a>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // Create a reactive form group with email and password controls.
  // The 'Validators.required' and 'Validators.email' are built-in Angular validators.
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // Use a computed signal to check for email validation errors.
  // This will re-evaluate whenever the email form control's value or validation status changes.
  emailErrors = computed(() => {
    const emailControl = this.loginForm.controls.email;
    if (emailControl.invalid && (emailControl.dirty || emailControl.touched)) {
      if (emailControl.errors?.['required']) {
        return 'Email is required.';
      }
      if (emailControl.errors?.['email']) {
        return 'Please enter a valid email address.';
      }
    }
    return null;
  });

  // Use a computed signal to check for password validation errors.
  passwordErrors = computed(() => {
    const passwordControl = this.loginForm.controls.password;
    if (passwordControl.invalid && (passwordControl.dirty || passwordControl.touched)) {
      if (passwordControl.errors?.['required']) {
        return 'Password is required.';
      }
    }
    return null;
  });

  // The onSubmit method handles the form submission.
  // It checks if the form is valid before processing.
  onSubmit() {
    if (this.loginForm.valid) {
      // You would typically send the form data to a backend API here.
      console.log('Form is valid. Submitting data:', this.loginForm.value);
      // Example of clearing the form after a successful submission
      this.loginForm.reset();
    } else {
      // If the form is invalid, this marks all controls as "touched" to display error messages.
      this.loginForm.markAllAsTouched();
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
