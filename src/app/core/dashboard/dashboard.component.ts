import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/_models/IPerson.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  signUpPerson: IPerson;

  email = '';

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('username')).subscribe(resp => {
      this.email = resp.username;
    });
  }

}
