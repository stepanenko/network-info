import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { StudentsModule } from './students/students.module';
import { CommonComponentsModule } from 'src/app/common/common-components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    MainModule,
    StudentsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonComponentsModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
