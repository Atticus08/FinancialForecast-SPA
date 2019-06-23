import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { DetailsComponent } from './details/details.component';
import { StaffingComponent } from './staffing/staffing.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: SummaryComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'staffing',
        component: StaffingComponent,
      },
      {
        path: 'summary',
        component: SummaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
