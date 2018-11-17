import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatTooltipModule,
        RouterModule
    ],
    providers: [
        AuthGuard,
        AuthenticationService
    ]
})

export class AuthModule { }
