import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string;
  public lname:string;
  private itemDoc: AngularFirestoreDocument<any>;
  private col:AngularFirestoreCollection<any>;
  private users;
   constructor(private afs: AngularFirestore) {
   this.itemDoc =this.afs.doc("users/1");
   this.col=this.afs.collection("users");
   this.col.valueChanges().subscribe(res=>{
     console.log(res);
     this.users=res;
   })

  /*let item=this.itemDoc.valueChanges().subscribe(res=>{
      //console.log(res);
    this.name=res.name;
    this.lname=res.lname;
     // this.users=res;
    });*/
  }
   send(){
    this.col.add({name:this.name,lname:this.lname}).then(res=>{
    //  alert(res);
    })
  }
}