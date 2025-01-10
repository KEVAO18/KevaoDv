import { Injectable } from '@angular/core';
import mainData from '@cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }

  getData(){
    return mainData;
  }

  getpersonal(){
    return mainData.mainData.personal;
  }

  getsocial(){
    return mainData.mainData.social;
  }

  getskills(){
    return mainData.mainData.skills;
  }

  getProjects(){
    return mainData.mainData.projects;
  }

  getAbout(){
    return mainData.mainData.about;
  }

  getEducation(){
    return mainData.mainData.Education;
  }

  getCourses(){
    return mainData.mainData.courses;
  }
}
