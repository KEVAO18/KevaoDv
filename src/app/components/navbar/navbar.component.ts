import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CvService } from '@app/servicios/cv.service';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  icons: any = {
    "Itchio": faItchIo,
    "LinkedIn": faLinkedin,
    "GitHub": faGithub,
    "AllMyLinks": faAddressBook
  };

  @Input() pagAct!: string;

  data!: any;

  redes!: any;

  constructor(private cv: CvService, private libreria: FaIconLibrary) {
    this.libreria.addIcons(faItchIo, faLinkedin, faGithub, faAddressBook);
  }

  ngOnInit() {
    this.data = this.cv.getpersonal();
    this.redes = this.cv.getsocial();
  }

}
