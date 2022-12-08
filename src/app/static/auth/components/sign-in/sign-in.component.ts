import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/decorators/ngrx-selector.decorator';
import { getErrorMessage } from 'src/app/core/helpers/error-message.helper';
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

  public readonly getErrorMessage = getErrorMessage;
  @State(selectAuthIsLoading) public readonly isLoading$: Observable<boolean>;
  

  constructor(private readonly store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public get email(): AbstractControl<string> {
    return this.signInForm.controls['email'];
  }

  public get password(): AbstractControl<string> {
    return this.signInForm.controls['password'];
  }

  private initForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]) as AbstractControl,
      password: new FormControl('', Validators.required) as AbstractControl,
    });
  }

  public submit(): void {
    const { email, password } = this.signInForm.getRawValue();
    this.store.dispatch(login({ email, password }));
  }
}
