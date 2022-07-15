import { Component } from '@angular/core';
import { SignInService } from './sign-in.service';
import 'rxjs/add/operator/toPromise';
@Component({
    selector: 'app-sign-in',
    template: `
        <form (ngSubmit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <input
                placeholder="Email" ngModel #txtEmail="ngModel" name="email" required email
            >
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.email">
                Email is not valid
            </p>
            <br><br>
            <input
                type="password" placeholder="Password" ngModel #txtPassword="ngModel" name="password" required minlength="6" pattern="[a-z]*">
                <p *ngIf="txtPassword.touched && txtPassword.errors?.required">
                Password is required
            </p>
            <br><br>
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="NodeJS"> NodeJS</label>
                <label><input type="checkbox" [ngModel]="false" name="Angular"> Angular</label>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS"> ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form>
    `,
    providers: [SignInService]
})

export class SignInComponent {
    constructor(private signInService: SignInService) {}
    onSubmit(formSignIn) {
        this.signInService.sendPost(formSignIn.value)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
}