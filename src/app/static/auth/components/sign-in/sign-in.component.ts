import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAuthCredentials } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { login } from 'src/app/core/store/actions/app.actions';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, OnDestroy{
  private destroy$ = new Subject();
  signInForm: FormGroup;


  constructor(private authService: AuthService, private store: Store<IAppState>) { }


  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signIn() {
    const {email, password}: IAuthCredentials = {...this.signInForm.value } 
    this.store.dispatch(login({email, password}));
    this.store.select('user').pipe(takeUntil(this.destroy$)).subscribe((data)=> console.log(data))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
