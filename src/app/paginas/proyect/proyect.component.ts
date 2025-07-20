import { Component } from '@angular/core';
import { GithubService } from '@app/servicios/github.service';
import { NavbarComponent } from "@app/components/navbar/navbar.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { GitHubSearchResponse, repositorio } from '@app/interfaces/github';
import { GithubProjectsComponent } from "@app/components/github-projects/github-projects.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyect',
  imports: [NavbarComponent, FooterComponent, GithubProjectsComponent, CommonModule],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.scss'
})
export class ProyectComponent {

  pagAct!: string;
  repos!: GitHubSearchResponse;
  repositories: repositorio[] = [];
  isLoading = false;

  constructor(private github: GithubService) { }

  // ngOnInit es un buen lugar para cargar datos iniciales
  ngOnInit(): void {

    this.pagAct = "home";

    this.isLoading = true;

    // Nos suscribimos al Observable para recibir los datos
    this.github.getRepos().subscribe({
      next: (data) => {
        this.repos = data;
        this.repositories = this.repos.items;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener los repositorios:', error);
        this.isLoading = false;
      }
    });
  }

}
