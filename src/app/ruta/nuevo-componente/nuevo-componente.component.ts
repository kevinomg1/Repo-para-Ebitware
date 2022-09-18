import { Component, OnInit } from '@angular/core';
import { peliculasService } from 'src/app/pelicula.service';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss']
})
export class NuevoComponenteComponent implements OnInit {
  
  nombre = "kevin omar merino galindo";
  peliculas: any = [];
  // peliculas = [];
  constructor(service: peliculasService) {
    
    this.peliculas = service.getPeliculas();
  }

  ngOnInit(): void {
    
  }

  getProfession(){
    return 'Front End';
  }

  

}
