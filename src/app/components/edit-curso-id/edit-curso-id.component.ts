import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IddServicesService } from 'src/app/service/idd-services.service';
import { MatDialog } from '@angular/material/dialog';
import { EditObjetivoComponent } from '../edit-objetivo/edit-objetivo.component';
import { EditSeccionComponent } from '../edit-seccion/edit-seccion.component';
import {VgApiService} from '@videogular/ngx-videogular/core';



declare var YT: any;



@Component({
  selector: 'app-edit-curso-id', 
    
  templateUrl: './edit-curso-id.component.html',
  styleUrls: ['./edit-curso-id.component.css']
})
export class EditCursoIdComponent implements OnInit{

  
  id:any
  editCurso:any;
  objetivos:any;
  seccions:any;
  formNewimg: FormGroup;
  formNewvideos:FormGroup;
  NewobjetivoCUrsos: FormGroup;
  NewSeccionCUrsos: FormGroup;
  file: any;  
  video: any;
  formdata= new FormData();
  formdataVideo= new FormData();
  datosCursosUpdate: FormGroup;  
  typerECURSO:any;
  formdataUpdateUser= new FormData();
  preload: string = 'auto';
  api: VgApiService | undefined;

  selectedFile: File | null = null;

  private player: any;

  


  constructor(
    private activeRouter:ActivatedRoute,        
    private dataService: IddServicesService,
    public formulario:FormBuilder,
    private matDialog: MatDialog,
  ) { 
    this.NewSeccionCUrsos=this.formulario.group({      
      nombre:['', [Validators.required,Validators.maxLength(210), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),]],      
      descripcion:['', [Validators.required,Validators.maxLength(210), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),]],                 
    })
    this.NewobjetivoCUrsos=this.formulario.group({      
      objetivo:['', [Validators.required,Validators.maxLength(210), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),]],      
    })
    this.formNewimg=this.formulario.group({      
      file:[null, [Validators.required]],
    })    
    this.formNewvideos=this.formulario.group({      
      video:[null, [Validators.required]],
    }) 
    this.datosCursosUpdate=this.formulario.group({      
      name:['', [Validators.required,Validators.maxLength(30), Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),]],
      Descripcion:['', [Validators.required, Validators.maxLength(160),Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i)]],
      tipo:['', [Validators.required]],
      precio:['', [Validators.required, Validators.pattern(/^[0-9]+$/i)]],
      tipyRec:['', [Validators.required]],      
    })
   
  }
  
  onPlayerReady(api: VgApiService) {
    this.api = api;
  }


  ngOnInit(): void {
    this.id=this.activeRouter.snapshot.paramMap.get('id')  
    const apiKey = 'AIzaSyBEWYjQFO5aPqqgx3MR-XHS1dXrwBXBQgg';

   this.loadYoutubeApi(apiKey)

   
    this.dataService.getTypeRecursos().subscribe(res=>{
      this.typerECURSO=res
    })
    
    this.datosActualizadosUsuario()
    
    this.obtenerSeccionesCursoId()
    this.objetivoCursoId()
  }

  loadYoutubeApi(apiKey: string): void {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    tag.onload = () => {
      YT.ready(() => {
        this.player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'ciXG_H1vKMs', // Reemplaza con el ID del video de YouTube
          playerVars: {
            'autoplay': 1, // Cambia a 1 para reproducir automáticamente
            'controls': 1, // Muestra los controles del reproductor
            'rel': 1, // Evita mostrar videos relacionados al final
            'showinfo': 0, // Oculta información adicional del video
          }
        });
      
      });
    };

    document.body.appendChild(tag);
  }


  registrarNuevaSeccion(){
    if(!this.NewSeccionCUrsos){
      return alert("llene los datos correctamente")   
    }
    this.dataService.nuevoSeccionCurso(this.id, this.NewSeccionCUrsos.value).subscribe(res=>{      
      this.obtenerSeccionesCursoId()
    })
  }

  borrarSeccion(id:any){
    this.dataService.aborrarSeccionCursoId(id).subscribe(res=>{
      this.obtenerSeccionesCursoId()
    })
  }

  editarobjetivoCurso(objetivo:any, id:any){
    this.matDialog.open(EditObjetivoComponent,
      {
        data:{
          id:id,
          objetivo:objetivo,          
        },
        width:"500px",
        height: "500px"
      });
  }
  editarSeccionCurso(id:any, nombre:any, descripcion:any){
    this.matDialog.open(EditSeccionComponent,
      {
        data:{
          id:id,
          nombre:nombre,        
          descripcion:descripcion  
        },
        width:"500px",
        height: "500px"
      });
  }

  borrarobjetivoCurso(id:any){
    this.dataService.aborrarObjetivoCursoId(id).subscribe(res=>{      
      this.objetivoCursoId()
      
    })
  }

 

  datosActualizadosUsuario(){
    this.dataService.getrecurosEditId(this.id).subscribe(res=>{
      this.editCurso=res           
      this.datosCursosUpdate.setValue({
        name: this.editCurso.nombre,
        Descripcion: this.editCurso.Descripcion,
        tipo: '',
        precio: this.editCurso.precio,
        tipyRec: this.editCurso.tipyRec,        
      });      
    })
  }

  imagensXD(){
    if(this.formNewimg.valid){    
      this.dataService.vistapreviaCurso(this.id,this.formdata).subscribe(res=>{
        let arr = Object.entries(res);
        alert(arr[0][1]+ ', actualiza la pagina')
        this.dataService.getrecurosEditId(this.id).subscribe(res=>{
          this.editCurso=res
          console.log(res)
        })
      })
    }else{
      alert('Debes subir una imagen')    
    }    
  }

  videoXD(id_seccion:any){
    
    if(this.formNewvideos.valid){  
      console.log(this.formdataVideo)  
      this.dataService.videoCurso(id_seccion,this.formdataVideo).subscribe(res=>{
        let arr = Object.entries(res);
        alert(arr[0][1]+ ', actualiza la pagina')
        this.obtenerSeccionesCursoId()
      })
    }else{
      alert('Debes subir una imagen')    
    }    
    console.log("hola")
  }

  videoUp(event:any){      
    this.file = event.target.files[0];
  
    this.formdataVideo.append("video", this.file, this.file.name)
    console.log(this.formdataVideo)
  }

  imagenUp(event:any){      
    this.file=event.target.files[0];    
    this.formdata.append("file", this.file, this.file.name)
    console.log(this.formdata)   
  }

  nuevoObjetivo(){
    if(!this.NewobjetivoCUrsos.valid){  
      return alert("llene los datos correctamente")   
    }

    this.dataService.nuevoObjetivoCurso(this.id,this.NewobjetivoCUrsos.value).subscribe(res=>{
      console.log(res)
      this.objetivoCursoId()
    })
  }

  

  actualizarDatos(){
    if(!this.datosCursosUpdate.valid){
      return alert("llene los datos correctamente")      
    }

    this.dataService.updateCursoUserId(this.id, this.datosCursosUpdate.value).subscribe(res=>{
      let arr = Object.entries(res);
        
      if(arr[0][0] == "success"){
        alert("Actualizado con exito")
        this.datosActualizadosUsuario()
      }else{
        alert(arr[0][1])
      }

    })

    
  }

  obtenerSeccionesCursoId(){
    this.dataService.seccioneCursoId(this.id).subscribe(res=>{
      this.seccions=res      
    })
  }

  objetivoCursoId(){
    this.dataService.objetivoCursoId({id_curso:this.id}).subscribe(res=>{
      this.objetivos=res      
    })
  }

  publicarCurso(id_curso:any){    
    this.dataService.publicarCurso({id:id_curso}).subscribe(res=>{
      console.log(res)
    })
  }


  get name(){ return this.datosCursosUpdate.get('name');}
  get Descripcion(){ return this.datosCursosUpdate.get('Descripcion');}
  get tipo(){ return this.datosCursosUpdate.get('tipo');}
  get precio(){ return this.datosCursosUpdate.get('precio');}    
  get tipyRec(){ return this.datosCursosUpdate.get('tipyRec0');}


  get nombre(){ return this.datosCursosUpdate.get('nombre');}
  get descripcion(){ return this.datosCursosUpdate.get('descripcion');}  
}
