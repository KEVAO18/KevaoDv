import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CvService } from '@app/servicios/cv.service';

@Component({
  selector: 'app-about-timeline',
  imports: [CommonModule],
  templateUrl: './about-timeline.component.html',
  styleUrl: './about-timeline.component.scss'
})
export class AboutTimelineComponent implements OnInit{

  timelineItems!: any[];

  education!: any[];

  constructor(private Cv: CvService) { }

  ngOnInit(): void {

    this.timelineItems = ['right', 'left', 'right'];

    this.education = this.Cv.getEducation();
  }
}
