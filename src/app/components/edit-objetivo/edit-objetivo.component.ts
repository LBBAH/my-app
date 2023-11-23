import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';

@Component({
  selector: 'app-edit-objetivo',
  templateUrl: './edit-objetivo.component.html',
  styleUrls: ['./edit-objetivo.component.css']
})
export class EditObjetivoComponent {
  formobjetivoCurso: FormGroup;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data:
    {      
      id:number,
      objetivo:string,    
    },
    private matDialogRef: MatDialogRef<EditObjetivoComponent>,
    private router:Router,
    private http:HttpClient,
    private matDialog: MatDialog,
    private dataService:IddServicesService,
    public formulario:FormBuilder,
  ){
    this.formobjetivoCurso=this.formulario.group({
      objetivo:['', [Validators.required, Validators.maxLength(120), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i)]],      
    });
  }


  ngOnInit(): void {
    this.formobjetivoCurso.setValue({
      objetivo: this.data.objetivo,      
    });
  }
  closeDialog(){
    this.matDialogRef.close();
  }
  

  UpdateUserz(){
    if(!this.formobjetivoCurso.valid){  
      return alert("llene los datos correctamente")   
    }

    this.dataService.actualizarObjetivoCursoId(this.data.id,this.formobjetivoCurso.value).subscribe(res=>{
      console.log(res)      
    })
  }

  
}
