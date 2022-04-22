import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.signInForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.signInForm.controls['password'];
  }

  private initForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return control.hasError('email') ? 'Not a valid email' : '';
  }

  submit(): void {
    console.log(this.password);
  }
}
