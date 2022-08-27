import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {

 
  emailForm: FormGroup;

  

  emailRegex =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private readonly fb: FormBuilder ,  private readonly router: Router, private authService : AuthService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig
    ) {
      this.primengConfig.ripple = true;

    this.emailForm = this.fb.group({

      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],


    })

  }
  showMessage(message: string, type: string, label: string) {
    this.messageService.add({ key: 'notification', severity: type, summary: label, detail: message });

  }
  
  onSubmit():void {
    console.log('llama al servicio')
    this.authService.forgot(this.emailForm.value).subscribe({
      
      next:(res)=>{
        console.log("RESPUESTA DE SERVICIO")
        console.log(res.message);
        this.showMessage(res.message, 'success', 'Aviso!!');
       
       setTimeout(() => {
         this.router.navigate(['auth/login']);

       }, 3000);
      },

      error:(res)=>{
        this.showMessage(res.error.message, 'error', 'Error!!');
       
      }

      
    })
  }

}



