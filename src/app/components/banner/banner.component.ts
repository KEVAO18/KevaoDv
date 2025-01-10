import { Component } from '@angular/core';
import { CvService } from '@app/servicios/cv.service';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  navInfo!: any;

  constructor(private data: CvService) { }

  ngOnInit() {
    this.navInfo = this.data.getpersonal();
  }

}
