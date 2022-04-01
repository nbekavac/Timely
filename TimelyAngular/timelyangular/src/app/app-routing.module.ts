import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProjectComponent} from './project/project.component';
import { StoptimerComponent } from './stoptimer/stoptimer.component';

const routes: Routes = [
  {path:'project',component:ProjectComponent},
  {path:'stoptimer',component:StoptimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
