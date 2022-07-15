import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonComponent } from './person/person.component';
import { StructComponent } from './struct/struct.component';
import { UserFormNgModelComponent } from './user-form-ng-model/user-form-ng-model.component';
import { WordComponent } from './word/word.component';
import { WordsComponent } from './words/words.component';
import { IpComponent } from './ip.component';
import { SignInComponent } from './sign-in.component';
import { IpService } from './ip.service';
import { SignInService } from './sign-in.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListPersonComponent,
    PersonComponent,
    StructComponent,
    UserFormNgModelComponent,
    WordComponent,
    WordsComponent,
    IpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IpService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
