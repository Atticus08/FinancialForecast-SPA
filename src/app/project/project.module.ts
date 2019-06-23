import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectComponent } from './project.component';
import { DetailsComponent } from './details/details.component';
import { StaffingComponent } from './staffing/staffing.component';
import { SummaryComponent } from './summary/summary.component';
import { TabnavComponent } from './tabnav/tabnav.component';

@NgModule({
  declarations: [
    ProjectComponent,
    DetailsComponent,
    StaffingComponent,
    SummaryComponent,
    TabnavComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    ProjectRoutingModule,
  ],
})

export class ProjectModule { }
