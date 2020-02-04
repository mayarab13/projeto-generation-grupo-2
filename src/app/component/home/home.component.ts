import { Globals } from '../../model/Globals';
import { Login } from '../../model/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ Globals ]
})
export class HomeComponent implements OnInit {

  login: Login;

  constructor(private router: Router) { }

  ngOnInit() {
    /* LOGIN
    
    if(Globals.LOGIN == undefined){
      this.router.navigate(['/login']);
    } else {
      this.login = Globals.LOGIN;

    }

    */
    
  }

}
