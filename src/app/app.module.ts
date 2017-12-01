import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const environment={
  production: false,
  firebase:{
    apiKey: "AIzaSyB0h3SAyF6bJj9Xhv5UtOGlwkGhgH0efw0",
    authDomain: "myapp-7bd05.firebaseapp.com",
    databaseURL: "https://myapp-7bd05.firebaseio.com",
    projectId: "myapp-7bd05",
    storageBucket: "myapp-7bd05.appspot.com",
    messagingSenderId: "740158676491"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   /*AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,*/
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


