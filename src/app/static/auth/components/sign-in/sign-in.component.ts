import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/core/store/actions/auth.actions';
import { selectAuthIsLoading } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  signInForm: UntypedFormGroup;
  hide = true;
  readonly isLoading$ = this.store.pipe(select(selectAuthIsLoading));

  constructor(private store: Store<IAppState>) {}

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
    this.signInForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return control.hasError('email') ? 'Not a valid email' : '';
  }

  submit(): void {
    const { email, password } = this.signInForm.value;
    this.store.dispatch(login({ email, password }));
  }
}
