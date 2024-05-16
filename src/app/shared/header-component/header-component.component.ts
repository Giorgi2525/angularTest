import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NotFoundComponentComponent } from '../not-found-component'
import { FormFieldErrorExample } from '../first-component'

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: './header-component.component.html',
  standalone: true,
  imports: [MatTabsModule,NotFoundComponentComponent,FormFieldErrorExample],
})
export class TabGroupBasicExample {}
