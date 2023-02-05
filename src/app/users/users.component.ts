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

userCreatedStatus = 'No User is Created';

  constructor() { 
    setTimeout(() => {
      this.allowNewUser =true;
    }, 3000);
  }

changeUserCreatedStatus(){
  this.userCreatedStatus = 'User is Created';
}

  ngOnInit(): void {
    
  }
}
