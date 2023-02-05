import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
 // selector: '[app-users]',
 //selector: '.app-users',
  templateUrl: './users.component.html',
 // styleUrls: ['./users.component.css']
 styles:[`
    h3{
      color:red;
    }
 `]
})
export class UsersComponent implements OnInit {

allowNewUser = false;
//userCreatedStatus = 'No User is Created';
userName = 'Test User';
isUserCreated = false;
users = ['user1', 'user2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewUser =true;
    }, 3000);
  }

changeUserCreatedStatus(){
  this.isUserCreated = true;
  //this.userCreatedStatus = 'User is Created';
  this.users.push(this.userName);
}

onUpdateUser(event: Event){
  this.userName = (event.target as HTMLInputElement).value;
}

  ngOnInit(): void {
    
  }
}
