import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDataComponent } from './player-data/player-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EmplistComponent,
    EmpAddComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
   PlayerDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
