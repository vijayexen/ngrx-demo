import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/state/reducers/users.reducer';
import { INITIAL_SIGNUP_STATE } from './shared/state/stores/user.signup.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({
      username: userReducer
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
