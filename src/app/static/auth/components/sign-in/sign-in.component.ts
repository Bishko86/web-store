import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/core/store/actions/auth.actions';
import { selectAuthIsLoading } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { SignInFormModel } from '../../models/sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup<SignInFormModel>;
  public hide = true;
  readonly isLoading$ = this.store.pipe(select(selectAuthIsLoading));

  constructor(private readonly store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.initForm();
  }

  get email(): AbstractControl<string> {
    return this.signInForm.controls['email'];
  }

  get password(): AbstractControl<string> {
    return this.signInForm.controls['password'];
  }

  private initForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]) as AbstractControl,
      password: new FormControl('', Validators.required) as AbstractControl,
    });
  }

  public getErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return control.hasError('email') ? 'Not a valid email' : '';
  }

  public submit(): void {
    const { email, password } = this.signInForm.getRawValue();
    this.store.dispatch(login({ email, password }));
  }
}
