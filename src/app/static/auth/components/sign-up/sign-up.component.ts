import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hidePass1 = true;
  hidePass2 = true;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.signUpForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.signUpForm.controls['password'];
  }

  private initForm(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
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
