import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreloginComponent } from './grelogin/grelogin.component';
import { GreregisterComponent } from './greregister/greregister.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    GreloginComponent,
    GreregisterComponent,
    StudentinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
