import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CvService } from '@app/servicios/cv.service';
import { faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  icons: any = {
    "Itchio": faItchIo,
    "LinkedIn": faLinkedin,
    "GitHub": faGithub,
    "AllMyLinks": faAddressBook
  };

  pageLinks: any[] = [
    {
      "name":"Home",
      "url": "/"
    },
    {
      "name":"Otros Proyectos",
      "url": "project"
    }
  ]

  data!: any;

  personal!: any;
  
  constructor(private cv: CvService, private libreria: FaIconLibrary) { 
    this.libreria.addIcons(faItchIo, faLinkedin, faGithub, faAddressBook);
  }

  ngOnInit() {
    this.data = this.cv.getsocial();
    this.personal = this.cv.getpersonal();
  }

}
