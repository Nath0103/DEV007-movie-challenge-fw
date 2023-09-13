// ng g s service/nombre....
//crea una api service
//aqui se llama o ejecutan comandos para llamar a la api 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL de la API para obtener películas populares
  private urlApiPopularMovies = 'https://api.themoviedb.org/3/movie/popular';
  // URL de la API para descubrir películas
  private urlApiMovie = 'https://api.themoviedb.org/3/discover/movie';
  // Mi API Key de The Movie Database
  private apiKey = 'a6427e8733087d9fdea274d26581c5f0';

  constructor(private http: HttpClient) { }

  // Método para obtener cambios en películas
  getMovies(): Observable<any> {
    const moviesUrl = `${this.urlApiMovie}?api_key=${this.apiKey}`;
    console.log("getMovies")
    return this.http.get<any>(moviesUrl);
  }

  // Método para obtener películas populares
  getPopularMovies(): Observable<any> {
    const popularMoviesUrl = `${this.urlApiPopularMovies}?api_key=${this.apiKey}`;
    console.log("getMovies POPULARES")
    return this.http.get<any>(popularMoviesUrl);
  }
}
