import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Roles } from './components/roles/roles';
import { Master } from './components/master/master';
import { Client } from './components/client/client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anuglar_tutorial');
}
