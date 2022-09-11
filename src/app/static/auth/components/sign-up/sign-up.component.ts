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
import { Observable, Subject, takeUntil } from 'rxjs';
import { getErrorMessage } from 'src/app/core/helpers/error-message.helper';
import { IUser } from 'src/app/core/models';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { UserService } from 'src/app/core/services/user.service';
import {
  registrate,
  AuthActions,
} from 'src/app/core/store/actions/auth.actions';
import { selectAuthIsLoading } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { SignUpFormModel } from '../../models/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnDestroy {
  public signUpForm: FormGroup<SignUpFormModel>;
  public hidePass1 = true;
  public hidePass2 = true;

  public readonly getErrorMessage = getErrorMessage;
  public readonly isLoading$: Observable<boolean>;

  private readonly destroy$ = new Subject<boolean>();

  constructor(
    private readonly store: Store<IAppState>,
    private readonly updates$: Actions,
    private readonly userService: UserService,
    private readonly snackBar: SnackBarService,
  ) {
    this.isLoading$ = this.store.pipe(select(selectAuthIsLoading));
  }

  public ngOnInit(): void {
    this.initForm();
    this.saveUser();
  }

  public get username(): AbstractControl {
    return this.signUpForm.controls['username'];
  }

  public get email(): AbstractControl {
    return this.signUpForm.controls['email'];
  }


  public get confirmPassword(): AbstractControl {
    return this.signUpForm.controls['confirmPassword'];
  }

  private initForm(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required) as AbstractControl,
      email: new FormControl('', [Validators.required, Validators.email]) as AbstractControl,
      password: new FormControl('', Validators.required) as AbstractControl,
      confirmPassword: new FormControl('', Validators.required) as AbstractControl,
    });
  }

  public submit(): void {
    const { username, email, password, confirmPassword } = this.signUpForm.getRawValue();
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

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
