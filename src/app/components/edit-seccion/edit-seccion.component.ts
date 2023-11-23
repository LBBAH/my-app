import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';


@Component({
  selector: 'app-edit-seccion',
  templateUrl: './edit-seccion.component.html',
  styleUrls: ['./edit-seccion.component.css']
})
export class EditSeccionComponent {


  formSeccionCurso: FormGroup;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {      
      id:number,
      nombre:string,    
      descripcion:string,      
    },
    private matDialogRef: MatDialogRef<EditSeccionComponent>,
    private router:Router,
    private http:HttpClient,
    private matDialog: MatDialog,
    private dataService:IddServicesService,
    public formulario:FormBuilder,
  ){
    this.formSeccionCurso=this.formulario.group({
      nombre:['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i)]],      
      descripcion:['', [Validators.required, Validators.maxLength(120), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i)]],      
    });
  }

  ngOnInit(): void {
    this.formSeccionCurso.setValue({
      nombre: this.data.nombre,      
      descripcion: this.data.descripcion,      
    });
  }
  closeDialog(){
    this.matDialogRef.close();
  }
  

  UpdateUserz(){
    if(!this.formSeccionCurso.valid){  
      console.log(this.formSeccionCurso.value)
      return alert("llene los datos correctamente")   
    }

    this.dataService.actualizarSeccionCursoId(this.data.id,this.formSeccionCurso.value).subscribe(res=>{
      console.log(res)      
    })
  }
}
