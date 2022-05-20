import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { UserService } from 'src/app/core/services/user.service';
import {
  registrate,
  AuthActions,
} from 'src/app/core/store/actions/auth.actions';
import { selectAuthIsLoading } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  signUpForm: FormGroup;
  hidePass1 = true;
  hidePass2 = true;

  readonly isLoading$ = this.store.pipe(select(selectAuthIsLoading));

  constructor(
    private store: Store<IAppState>,
    private updates$: Actions,
    private userService: UserService,
    private snackBar: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.saveUser();
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
    const { username, email, password, confirmPassword } = this.signUpForm.value;
    if(password === confirmPassword) {
      this.store.dispatch(registrate({ username, email, password }));
    } else {
      this.signUpForm.controls['confirmPassword'].setErrors({ incorrect: true });
    }
  }

  private saveUser(): void {
    this.updates$
      .pipe(ofType(AuthActions.REGISTRATION_SUCCESS), takeUntil(this.destroy$))
      .subscribe({
        next: (action: { user: IUser; type: string }) => {
          this.userService.createUser(action.user);
        },
        error: () => {
          this.snackBar.openSnackBar('Something went wrong', 'Error');
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
