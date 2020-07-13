import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatIconModule,

} from '@angular/material';

import { WelcomeWindowComponent } from './welcome-window.component';
import { WelcomeWindowService } from './welcome-window.service';
import { IgoLanguageModule } from '@igo2/core';
import { IgoInteractiveTourModule, IgoCustomHtmlModule } from '@igo2/common';

@NgModule({
  imports: [IgoLanguageModule,
    CommonModule,
    MatDialogModule,
    IgoInteractiveTourModule,
    IgoCustomHtmlModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule],
  declarations: [WelcomeWindowComponent],
  exports: [WelcomeWindowComponent],
  // entryComponents: [
  //   WelcomeWindowComponent
  // ],
})
export class IgoWelcomeWindowModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IgoWelcomeWindowModule,
      providers: [WelcomeWindowService]
    };
  }
}