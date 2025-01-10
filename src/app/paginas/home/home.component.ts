import { Component } from '@angular/core';
import { NavbarComponent as navbar } from "@components/navbar/navbar.component";
import { FooterComponent as footer } from "@components/footer/footer.component";
import { BannerComponent as banner } from "@components/banner/banner.component";
import { AboutComponent as about } from "@components/about/about.component";
import { SkillsComponent as skills } from "@components/skills/skills.component";
import { ProjectsComponent as Projects } from "@components/projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [
    navbar,
    footer,
    banner,
    about,
    skills,
    Projects
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pagAct!: string;

  constructor() {}

  ngOnInit() {
    this.pagAct = "home";
  }

}
