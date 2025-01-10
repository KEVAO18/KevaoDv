import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CvService } from '@app/servicios/cv.service';
import { AboutTimelineComponent } from "../about-timeline/about-timeline.component";

@Component({
  selector: 'app-about',
  imports: [CommonModule, AboutTimelineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  
  personal!: any;

  about!: any;

  education!: any;

  constructor(private getCv: CvService) {}

  ngOnInit(): void {
    this.personal = this.getCv.getpersonal();

    this.about = this.getCv.getAbout()[0].text;
  }

}
