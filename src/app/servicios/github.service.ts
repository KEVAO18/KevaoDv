import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GitHubSearchResponse } from '@app/interfaces/github';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // url base de la api
  private readonly urlBase: string = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient ) { }

  // método para obter los repositorios
  getRepos(): Observable<GitHubSearchResponse> {
    // Construimos la consulta como en el ejemplo anterior
    const query = `user:KEVAO18+topic:portfolio`;
    const url = `${this.urlBase}?q=${query}`;

    return this.http.get<GitHubSearchResponse>(url);
  }

  // método para obter las tecnologías
  getTechs(lang: string): Observable<any> {
    return this.http.get(lang);
  }
}
