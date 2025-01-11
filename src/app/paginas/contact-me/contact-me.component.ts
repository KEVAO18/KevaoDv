import { Component } from '@angular/core';

import { NavbarComponent as navbar } from "@components/navbar/navbar.component";
import { FooterComponent as footer } from "@components/footer/footer.component";
import { SocialComponent as social } from "../../components/social/social.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-contact-me',
  imports: [
    navbar,
    footer,
    social,
    BannerComponent
],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  pagAct!: string;

  constructor() {}

  ngOnInit() {
    this.pagAct = "contact";
  }
  
}
