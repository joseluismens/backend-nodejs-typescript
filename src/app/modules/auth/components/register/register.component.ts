import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ReCaptcha2Component } from 'ngx-captcha';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status_dialog = false;
  public siteKey = environment.siteKey;
  registerForm!: FormGroup;
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;

  hide = true;
  hideConfirm = true

  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  foods = [
    { value: 'RUT', viewValue: 'RUT' },
    { value: 'Pasaporte', viewValue: 'Pasaporte' },
  ];




  constructor(private readonly fb: FormBuilder, private authService: AuthService,
    private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.registerForm = this.fb.group({
      names: ['', [Validators.required, Validators.minLength(4)]],
      surnames: ['', [Validators.required, Validators.minLength(4)]],
      document_type: ['', [Validators.required]],
      document: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirm: ['', [Validators.required]],
      checkTerms: ['', [Validators.requiredTrue]],
      recaptcha: ['', Validators.required]


    });
    this.registerForm!
      .get('password_confirm')!
      // tslint:disable-next-line:no-non-null-assertion
      .setValidators([Validators.required, CustomValidators.equals(this.registerForm.get('password')!)]);
  }

  handleError() {
    return !this.registerForm.get('recaptcha')?.value;
  }
  reset(): void {
    this.captchaElem.resetCaptcha();
  }
  showDialog() {
    this.status_dialog = true;
  }


  showMessage(message: string, type: string, label: string) {
    this.messageService.add({ key: 'notification', severity: type, summary: label, detail: message });

  }

  onSubmit(): void {

    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.showDialog();
        this.reset();
        this.showMessage('se ha registrado exitosamentente', 'success', 'Felicidades!!');
        this.registerForm.reset();
      },
      error: (error) => {
        this.showMessage(error.error.message, 'error', 'Error!!');
        this.reset();

      }


    });
  }


}


function equalsValidator(otherControl: AbstractControl): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const otherValue: any = otherControl.value;
    return otherValue === value ? null : { notEquals: { value, otherValue } };
  };
}


export const CustomValidators = {
  equals: equalsValidator
};


