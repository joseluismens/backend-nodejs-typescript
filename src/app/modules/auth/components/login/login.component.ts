import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  hideConfirm = true;
  loginForm: FormGroup;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';


  constructor(private readonly fb: FormBuilder,
    private readonly router: Router,
    private authService: AuthService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig) {

    this.primengConfig.ripple = true;
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],

      password: ['', [Validators.required]],



    })
  }

  showMessage(message: string, type: string, label: string) {
    this.messageService.add({ key: 'notification', severity: type, summary: label, detail: message });

  }

  onSubmit(): void {


    this.authService.login(this.loginForm.value).subscribe({

      next: (res) => {
        console.log(res.role);
         this.router.navigate(['/admin'])
      
      },

      error: (res) => {
        console.log("ERROR", res.status)

        this.showMessage(res.error.message, 'error', 'Error!!');
      }


    })


  }

  goToRegister(): void {
    this.router.navigate(['auth/register'])
  }

  goToRecoverEmail(): void {
    this.router.navigate(['auth/forgot'])
  }

}
