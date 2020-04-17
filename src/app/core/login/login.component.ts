import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/_models/IUser.model';
import { PersonDataService } from 'src/app/shared/_services/person-data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserSignUpActions } from 'src/app/shared/state/actions/user.signup.actions';
import { UserLoginAction } from 'src/app/shared/state/actions/user.login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = this.fb.group({
    username: ['', Validators.email],
    password: ['', Validators.required]
  });
  user: IUser;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private personDataSrvc: PersonDataService,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('loginForm is invalid');
    } else {
      this.populateLoginForm();
      // this.personDataSrvc.authenticate(this.user)
      //   .pipe(takeUntil(this.destroy$))
      //   .subscribe(response => {
      //     console.log(response);
      //   });
    }
  }

  populateLoginForm() {
    this.user = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.store.dispatch({
      type: UserLoginAction.LOGIN_USER,
      payload: this.user
    });
  }

  logout() {
    console.log('Logget Out Successfully.');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
