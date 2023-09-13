import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any;
// aqui llamo a mi api service y todos los llmados de la api y los puedo usar en este componente

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.llenarData()
  }

  llenarData() { 
    this.apiService.getMovies(
      
    ).subscribe(data=>{
      this.data=data;
      console.log(this.data)
    })
  }
}
