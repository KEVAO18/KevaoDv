import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CvService } from '@app/servicios/cv.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{

  skills!: any;

  constructor(private cv: CvService) { }

  ngOnInit() {
    this.skills = this.cv.getskills();
  }

}
