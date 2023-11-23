import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {VgApiService} from '@videogular/ngx-videogular/core';
import { IddServicesService } from 'src/app/service/idd-services.service';


@Component({
  selector: 'app-reproducir-cursos',
  templateUrl: './reproducir-cursos.component.html',
  styleUrls: ['./reproducir-cursos.component.css']
})
export class ReproducirCursosComponent implements OnInit{

  api: VgApiService | undefined;
  id:any;
  temarioCurso:any;
  datisCursos:any;
  objetivosCUrsos:any;

  urlVideo:string = 'http://127.0.0.1:8000/videos/cursos/videoPrueba.mp4';


  constructor(
    private activeRouter:ActivatedRoute,
    private dataService: IddServicesService,
    private router: Router,
  ){

  }

  ngOnInit(): void {    
    this.id=this.activeRouter.snapshot.paramMap.get('id')  
    

    this.temarioCursos(this.id) 
    this.datosCursos(this.id)
    this.objetivoCursos(this.id)
        
  }


  datosCursos(id:any){
    this.dataService.getrecurosEditId(id).subscribe(res=>{
      this.datisCursos=res
    })
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }

  temarioCursos(id_curso:any){
    this.dataService.seccioneCursoId(id_curso).subscribe(res=>{    
      this.temarioCurso=res
    })
       
  }

  objetivoCursos(id_curso:any){
    this.dataService.objetivoCursoId({id_curso:id_curso}).subscribe(res=>{
      this.objetivosCUrsos=res
      console.log(res)
    })
  }


  CambiarReproduccion(id:any){    
    this.router.navigate(['vide/', id]);
  }


}
