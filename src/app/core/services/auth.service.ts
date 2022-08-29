import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { LoginForm } from '../interfaces/loginForm';
import { registerForm } from '../interfaces/registerForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url=environment.base_url;
  role = localStorage.getItem('role');


  constructor(private http: HttpClient, private router:Router) { }

  login(data: LoginForm) {
    return this.http.post(`${this.base_url}/login`, data).pipe(
      tap((res: any) => {
           localStorage.setItem('id', res.id),
          localStorage.setItem('email', res.email),
          localStorage.setItem('names', res.names),
          localStorage.setItem('surnames', res.surnames),
          localStorage.setItem('role', res.role),
          localStorage.setItem('token', res.token)


      })
    );
  }
  loggedIn(): boolean {
    console.log(localStorage.getItem('token'));
    
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('names');
    localStorage.removeItem('surnames');
    localStorage.removeItem('token');




    this.router.navigate(['/login']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  register(data:registerForm){
    return this.http.post(`${this.base_url}/register`,data);
  }
  
  newPassword(passwordForm: any , token: string){
    return this.http.post(`${this.base_url}/newpassword`, passwordForm).pipe(
      tap((res: any) => {
        console.log('RESPUESTA')
        console.log(res)

      })
    );
    
  }

  forgot(email: any){
    return this.http.post(`${this.base_url}/forgot`, email).pipe(
      tap((res: any) => {
        console.log(res)

      })
    );
  }
  getRole(){
    this.role = localStorage.getItem('role');
  }

  isSecretary(){
    if(this.role == 'SECRETARY'){
      return true;
    }else{
      return false;
    }
  }

  isReviewer(){
    if(this.role == 'REVIEWER'){
      return true;
    }else{
      return false;
    }
  }

  isResearcher(){
    if(this.role == 'RESEARCHER'){
      return true;
    }else{
      return false;
    }
  }

  isEditor(){
    if(this.role == 'EDITOR'){
      return true;
    }else{
      return false;
    }
  }

  isPresident(){
    if(this.role == 'PRESIDENT'){
      return true;
    }else{
      return false;
    }
  }

}
