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

  constructor() { 
    setTimeout(() => {
      this.allowNewUser =true;
    }, 3000);
  }

  ngOnInit(): void {
    
  }
}
