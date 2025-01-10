import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvService } from '@app/servicios/cv.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() pagAct!: string;

  data!: any;

  constructor(private cv: CvService) { }

  ngOnInit() {
    this.data = this.cv.getpersonal();
  }
}
