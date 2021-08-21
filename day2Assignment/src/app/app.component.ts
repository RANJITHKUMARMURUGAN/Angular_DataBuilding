import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello world';
  imgUrl="../assets/1.png"
  url="https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit():void{
    this.title="Hello from bridgelabz";
  }

  onClick($event: object){
    console.log("save button is clicked",$event);
    window.open(this.url,"_self");
  }

  onInput($event: { data: any; }){
    console.log("change Event Occured",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
    }
}
