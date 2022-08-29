import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-add-project-request',
  templateUrl: './add-project-request.component.html',
  styleUrls: ['./add-project-request.component.css']
})
export class AddProjectRequestComponent implements OnInit {

  documentos: any[] = [
    {value: 'compromiso', viewValue: 'Compromiso de investigador'},
    {value: 'carta', viewValue: 'Carta de aprobación de jefatura'},
    {value: 'consentimiento', viewValue: 'Consentimiento informado'},
    {value: 'preguntas', viewValue: 'Preguntas del investigador'},
  ];
  
  
  firstFormGroup : any = this._formBuilder.group({
    id: [localStorage.getItem('id')!, Validators.required],
    name: [localStorage.getItem('nombres')!, Validators.required],
    surname: ['', Validators.required],
    center: ['', Validators.required],
    topic: ['', Validators.required],
   // title: [localStorage.getItem('nombres')!, Validators.required],
  });
  
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  
    demoForm : any = this._formBuilder.group({
      //text_input: ['', Validators.required],
      photos: this._formBuilder.array([])
   });
  

  
    isLinear = true;
  
    constructor(private _formBuilder: FormBuilder, 
      private _snackBar: MatSnackBar
      ,private primengConfig: PrimeNGConfig,
       // public postulacionService : PostulacionService 
        ) { 
  
    //   this.demoForm = this._formBuilder.group({
      //  text_input: ['', Validators.required],
       // photos: this._formBuilder.array([])
    // });
  
    }
  
    ngOnInit(): void {
      
    }
  
    onFinish(){
  
      
  
      let formData = new FormData();
      //console.log('Title form ->', this.firstFormGroup.value)
      console.log('IMAGES FORMs ->', this.fotos)
    
      
      
  
      this.demoForm.value.photos?.forEach((file : any  ) =>{
        console.log('file appended -> ',file)
        formData.append('documents', file.file )
        
       // formData.append('dataDoc', file.details )
        
      })
      
        formData.append('fileDetails', JSON.stringify( this.documents))
     
  
      
      formData.append('userId', this.firstFormGroup.value.id )
      formData.append('title', this.firstFormGroup.value.name )
  
     
    console.log('formDataBody ->', formData)
    console.log('LOS DOCUMENTOS ->', this.documents)
      
      /*
      this.postulacionService.savePostulacion(formData).subscribe({
        next:(res)=>{
          console.log('res' ,res);
         //this.dialogRef.close();
         //window.location.reload();
         this._snackBar.open("Solicitud enviada ✅", "OK" , {duration: 2 * 1000} );
         
        },
        error: (res)=>{
          console.log('ERROR ->', res)
        }
      }) */
  
      //prearar array de files
  
      //preparar body
  
  
      //enviar datos por post
    }
  
    // We will create multiple form controls inside defined form controls photos.
    createItem(data : any): FormGroup {
      return this._formBuilder.group(data);
    }
  
     //Help to get all photos controls as form array.
  
      fotos : any = this.demoForm.get('photos')
  
      documents: any = [];
  
    // get photos(): any {
       
     // return this.demoForm.get('photos') as any;
    //};
  
  
    
  
  
  
    detectFiles(event : any) {
      //alert('Nuevo archivo detectado')
      let files = event.target.files;
      if (files) {
        for (let file of files) {
          let reader = new FileReader();
          reader.onload = (e: any) => {
            
          //  console.log("e.target.result", e.target.result);
              this.documents.push({name : file.name});
              this.fotos.push(this.createItem({
                  file,
                  url: e.target.result 
                  //Base64 string for preview image
              }));
  
              console.log('nuevo photos',  this.fotos.value)
          }
          reader.readAsDataURL(file);
        }
      }
    }
  
    removePhoto(i : any){
      this.fotos.removeAt(i);
      this.documents.splice(i, 1)
    }
  
    selectType(value : any, document : any, index : any){
        //console.log(value);
        
       // document.file.type = value
       // document.file.documento = value
  
        console.log('demo FORM ->', this.demoForm.value.photos[index].file.name)
  
  
        
         this.fotos.value[index].file.documento = value;
         this.documents[index].type = value;
         console.log('documents ->',this.documents)
         //this.fotos.value[index].file.name = value+'.pdf'
        
        
    }
}
