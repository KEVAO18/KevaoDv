import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvService } from '@app/servicios/cv.service';

@Component({
  selector: 'app-projects',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  proyectos!: any[];

  constructor(private Cv: CvService) { }

  ngOnInit(): void {
    this.proyectos = this.Cv.getProjects();
  }

}
