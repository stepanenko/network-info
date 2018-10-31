import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService
    ]
})

export class AuthModule { }
