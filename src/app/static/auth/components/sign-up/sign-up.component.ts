import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAuthCredentials } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { registrate } from 'src/app/core/store/actions/app.actions';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private authService: AuthService,
    private store: Store<IAppState>,
    private userServise: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.createUserDb();
    this.userServise
      .getAll()
      .snapshotChanges()
      .pipe(map((changes) => changes.map((c) => ({ ...c.payload.doc.data() }))))
      .subscribe((data) => {
        console.log(data);
      });
  }

  private initForm() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }
  signUp() {
    const credentials = { ...this.signUpForm.value };
    if (credentials.password === credentials.confirmPassword) {
      this.store.dispatch(registrate({ credentials }));
    }
  }

  createUserDb() {
    this.store.select('user').subscribe((user) => {
      if (user.user) {
        console.log(user);
        this.userServise.create(user.user);
      }
    });
  }
}
