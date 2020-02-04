import { LoginService } from '../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { Globals } from '../../model/Globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ]
})
export class LoginComponent implements OnInit {

  private login = new Login(null, null, null);
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  fazerLogin(){
    if (this.login.email == null || this.login.senha == null){
      document.getElementById("msgErro").style.visibility= "visible";
    } else {
      this.loginService.fazerLogin(this.login).subscribe((login: Login)=>{
        this.login.email = '';
        this.login.senha = '';
        alert("Bem-vindo!");
        Globals.LOGIN = login;
        this.router.navigate(['home']);
      },
      error => {
        alert("Login inválido");
        console.log(error.status);
        this.router.navigate(['cadastro']);
      })
    }

      
  }
    
  }



