import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from 'src/app/shared/_models/IPerson.model';
import { IUser } from 'src/app/shared/_models/IUser.model';
import { UserSignUpActions } from 'src/app/shared/state/actions/user.signup.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  person: IPerson;
  user: IUser;

  credentialsFormGroup = this.fb.group({
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required]
  });

  addressFormGroup: FormGroup = this.fb.group({
    addressType: [''],
    doorNo: [''],
    street: [''],
    country: [''],
    landMark: ['']
  });

  signUpForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    emailAddress: [''],
    address: this.addressFormGroup
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.person = {
      emailAddress: this.signUpForm.get('emailAddress').value,
      firstName: this.signUpForm.get('firstName').value,
      lastName: this.signUpForm.get('lastName').value
    };

    this.user = {
      username: this.person.emailAddress,
      password: this.credentialsFormGroup.get('password').value
    };

  }

}
