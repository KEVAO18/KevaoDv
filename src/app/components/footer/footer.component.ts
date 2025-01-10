import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CvService } from '@app/servicios/cv.service';
import { faFacebook, faXTwitter, faInstagram, faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  icons: any = {
    "Facebook": faFacebook,
    "X": faXTwitter,
    "Instagram": faInstagram,
    "Itchio": faItchIo,
    "LinkedIn": faLinkedin,
    "GitHub": faGithub,
    "AllMyLinks": faAddressBook
  };

  data!: any;

  personal!: any;
  
  constructor(private cv: CvService, private libreria: FaIconLibrary) { 
    this.libreria.addIcons(faFacebook, faXTwitter, faInstagram, faItchIo, faLinkedin, faGithub, faAddressBook);
  }

  ngOnInit() {
    this.data = this.cv.getsocial();
    this.personal = this.cv.getpersonal();
  }

}
