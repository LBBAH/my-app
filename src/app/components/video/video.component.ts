import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {VgApiService} from '@videogular/ngx-videogular/core';
import { IddServicesService } from 'src/app/service/idd-services.service';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  api: VgApiService | undefined;

  videolink:any
  id_seccion:any;

  constructor(  
    private activeRouter:ActivatedRoute,
    private dataService: IddServicesService,    
  ){

  }

  ngOnInit(): void {
    this.id_seccion=this.activeRouter.snapshot.paramMap.get('id')  
    this.getVideoSeccion()
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }


  getVideoSeccion(){
    this.dataService.videoReproduccion(this.id_seccion).subscribe(res=>{
      this.videolink=res
      console.log(res)
    })
  }


 



}
