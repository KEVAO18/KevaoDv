import { GithubService } from '@app/servicios/github.service';
import { Component, Input } from '@angular/core';
import { repositorio } from '@app/interfaces/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-projects',
  imports: [CommonModule],
  templateUrl: './github-projects.component.html',
  styleUrl: './github-projects.component.scss'
})
export class GithubProjectsComponent {

  @Input() project!: repositorio;

  lenguajes!: string[];

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    
    this.github.getTechs(this.project.languages_url).subscribe((data) => {
      this.lenguajes = Object.keys(data);
    });
  }

}
