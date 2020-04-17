import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from './shared/_models/IPerson.model';
import { PersonDataService } from './shared/_services/person-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Demo';

  constructor(
    private personDataSrvc: PersonDataService
  ) { }

  ngOnInit() {
    this.personDataSrvc.register({
      emailAddress: ''
    }).subscribe(response => {
      console.log(response);
    });
  }

}
