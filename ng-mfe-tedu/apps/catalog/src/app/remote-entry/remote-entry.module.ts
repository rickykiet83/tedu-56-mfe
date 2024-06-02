import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from '../nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NxWelcomeComponent,
      },
    ]),
  ],
  declarations: [NxWelcomeComponent],
})
export class RemoteEntryModule { }
