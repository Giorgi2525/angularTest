import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGroupBasicExample } from './shared/header-component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabGroupBasicExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectTry';
}
