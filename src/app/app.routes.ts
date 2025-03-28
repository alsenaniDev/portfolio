import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'projects', component: ProjectsComponent },
];
