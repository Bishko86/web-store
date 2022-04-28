import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registrate } from 'src/app/core/store/actions/user.actions';
import { selectIsFetching } from 'src/app/core/store/selectors/common.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hidePass1 = true;
  hidePass2 = true;

  readonly isFetching$ = this.store.pipe(select(selectIsFetching));

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  get username(): AbstractControl {
    return this.signUpForm.controls['username'];
  }

  get email(): AbstractControl {
    return this.signUpForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.signUpForm.controls['password'];
  }

  get confirmPassword(): AbstractControl {
    return this.signUpForm.controls['confirmPassword'];
  }

  private initForm(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
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
    const {username, email, password, confirmPassword} = this.signUpForm.value;
    if(password === confirmPassword) {
      this.store.dispatch(registrate({username, email, password}))
    } else {
      this.signUpForm.controls['confirmPassword'].setErrors({'incorrect': true});
    }
  }
}
